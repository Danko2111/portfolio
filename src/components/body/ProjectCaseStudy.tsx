import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

type ProjectData = {
  slug: string;
  title: string;
  date: string;
  images: string[];
  body: string[];
};

type Project = {
  title: string;
  date: string;
  image: string;
  slug: string;
};

export default function ProjectCaseStudy({
  projectData,
  projects,
}: {
  projectData: ProjectData;
  projects: Project[];
}) {
  const { title, date, images, body } = projectData;
  return (
    <div className="min-h-screen p-20 max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-20">
      <Link
        href={"/"}
        className="text-[#e4796f] inline-flex items-center group"
      >
        <FaArrowLeft className="fill-[#e4796f] w-3 h-3 -translate-x-[2px] group-hover:-translate-x-2 transition-all inline" />
        Daniel Kolesnitski
      </Link>
      <span className="w-fit px-3 py-1 mt-8 mb-3 rounded-full bg-cyan-600 bg-opacity-20 text-xs block">
        {date}
      </span>
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      <div className="aspect-video w-full relative mt-8 mb-12">
        <Image
          src={images[0] ?? "/code4rena_blog_thumb.png"}
          fill
          alt="case study hero image"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-24 px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-2">{`What is "${title}" ?`}</h2>
          {body.map((block, idx) => (
            <p
              className="text-md text-gray-500 leading-8"
              key={`text-block-${idx}`}
            >
              {block}
            </p>
          ))}
        </div>
        <ul className="flex flex-col items-center md:items-stretch md:justify-center md:flex-row lg:justify-start lg:flex-col gap-4">
          {projects.map((proj, idx) => (
            <li
              className="p-3 w-60 hover:bg-cyan-700 hover:bg-opacity-10 transition-colors rounded-md group"
              key={`project-${idx}`}
            >
              <Link
                href={`/case-study/${proj.slug}`}
                className="h-full flex flex-col gap-1"
              >
                <div className="aspect-video w-full relative">
                  <Image
                    src={proj.image}
                    fill
                    alt="project thumbnail image"
                    className="rounded-md"
                  />
                </div>
                <p className="text-md font-semibold">{proj.title}</p>
                <span className="w-fit mt-auto px-3 py-1 lg:mt-2 rounded-full bg-cyan-600 bg-opacity-20 group-hover:bg-cyan-700 group-hover:bg-opacity-25 text-xs block">
                  {proj.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
