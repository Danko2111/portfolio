import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import TableRow from "../table-row/TableRow";

const projectsList = [
  {
    year: 2024,
    project: "Front-end Redesign",
    name: "York1",
    stack: ["HTML", "Sass", "ASP.Net"],
    link: "https://york1.com/",
    linkLabel: "york1.com",
  },
  {
    year: 2024,
    project: "Avatar Management/Moderation",
    name: "Code4rena",
    stack: [
      "Next.js",
      "Typescript",
      "Sass",
      "Node.js",
      "Express",
      "Jest",
      "Postgres",
    ],
    link: "https://www.code4rena.com/@cccz",
    linkLabel: "code4rena.com",
  },
  {
    year: 2024,
    project: "API v2.0",
    name: "Code4rena",
    stack: ["Node.js", "Express", "Jest", "AWS", "Docker", "Postgres"],
    link: null,
    linkLabel: null,
  },
  {
    year: 2024,
    project: "Notifications Center",
    name: "Code4rena",
    stack: [
      "Next.js",
      "Typescript",
      "Sass",
      "Node.js",
      "Express",
      "Jest",
      "Postgres",
    ],
    link: "https://www.code4rena.com/",
    linkLabel: "code4rena.com",
  },
  {
    year: 2023,
    project: "In-house CMS blog",
    name: "Code4rena",
    stack: ["Next.js", "Typescript", "Sass", "Sanity CMS"],
    link: "https://www.code4rena.com/blog",
    linkLabel: "code4rena.com",
  },
  {
    year: 2023,
    project: "Web App 1.0",
    name: "Code4rena",
    stack: ["Next.js", "Typescript", "Sass", "Storybook", "Node.js"],
    link: "https://www.code4rena.com/",
    linkLabel: "code4rena.com",
  },
  {
    year: 2023,
    project: "Sunshine Snacks",
    name: "ABIL",
    stack: ["Next.js", "Javascript", "Tailwind", "Sanity CMS"],
    link: "https://sunshinesnacks.com/",
    linkLabel: "sunshinesnacks.com",
  },
  {
    year: 2023,
    project: "Warden Profiles",
    name: "Code4rena",
    stack: ["Next.js", "Typescript", "Sass"],
    link: "https://www.code4rena.com/@csanuragjain",
    linkLabel: "code4rena.com/profile",
  },
  {
    year: 2022,
    project: "Front-end Modernization",
    name: "Code4rena",
    stack: ["Next.js", "Typescript", "Sass"],
    link: "https://www.code4rena.com/",
    linkLabel: "code4rena.com",
  },
  {
    year: 2022,
    project: "Spendaway",
    name: "Personal Project",
    stack: [
      "React",
      "Javascript",
      "Chart.js",
      "Node.js",
      "Express.js",
      "Knex",
      "MySql",
    ],
    link: null,
    linkLabel: null,
  },
];

export default function ArchiveList() {
  return (
    <div className="min-h-screen p-20 max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-20">
      <div>
        <Link
          href={"/"}
          className="text-[#e4796f] inline-flex items-center group"
        >
          <FaArrowLeft className="fill-[#e4796f] w-3 h-3 -translate-x-[2px] group-hover:-translate-x-2 transition-all inline" />
          Daniel Kolesnitski
        </Link>
        <h1 className="text-5xl font-bold mt-2 mb-6">All Projects</h1>
        <table className="text-left w-full border-collapse">
          <thead className="sticky top-0 z-10 py-5 px-5 backdrop-blur border-b border-cyan-600/10">
            <tr>
              <th className="font-semibold py-4 pr-8 text-slate-800">Year</th>
              <th className="font-semibold py-4 pr-8 text-slate-800">
                Project
              </th>
              <th className="hidden font-semibold py-4 pr-8 text-slate-800 lg:table-cell">
                Made at
              </th>
              <th className="hidden font-semibold py-4 pr-8 text-slate-800 lg:table-cell">
                Built with
              </th>
              <th className="hidden font-semibold py-4 pr-8 text-slate-800 sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projectsList.map((project, idx) => (
              <TableRow rowData={project} key={`project-${idx}`} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
