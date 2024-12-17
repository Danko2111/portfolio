"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Body() {
  const [isResumeCopiedActive, setIsResumeCopiedActive] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const showCopied = () => {
    const textToCopy = "daniel.kolesnitski@gmail.com";
    navigator.clipboard.writeText(textToCopy);

    setIsResumeCopiedActive(true);
    setTimeout(() => {
      setIsResumeCopiedActive(false);
    }, 2000);
  };

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe each section
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex-1 lg:flex lg:justify-between lg:gap-4 min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 max-w-[1400px] mx-auto">
      <header className="lg:w-1/2 flex flex-col gap-8 lg:gap-12 max-h-screen lg:py-20 lg:sticky lg:top-0">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <a
              href="#about"
              className={`font-bold text-4xl md:text-7xl inline relative w-fit`}
            >
              Daniel
            </a>
            <a
              href="#about"
              className={`font-light text-4xl md:text-7xl text-[#e4796f] relative inline w-fit`}
            >
              Kolesnitski
            </a>
          </div>
          <p className={`font-semibold text-2xl`}>Full-Stack Developer</p>
          <p className={`font-extralight text-lg w-[65%]`}>
            I build innovative and cutting edge digital experiences for the web.
          </p>
        </div>
        <ul className="hidden lg:flex w-fit flex-col gap-2">
          <li className={`font-semibold relative group cursor-pointer w-fit`}>
            <a
              href="#about"
              className={`text-slate-500 group-hover:text-slate-900 transition-colors ${
                activeSection === "about" ? "text-slate-900" : "text-slate-400"
              }`}
            >
              About
              <span
                className={`absolute bottom-[2px] left-[-5px] h-[6px] w-[calc(100%+20px)] bg-cyan-600 opacity-30 scale-x-0 group-hover:scale-x-100 ${
                  activeSection === "about" ? "scale-x-100" : "scale-x-0"
                } transition-all origin-left`}
              ></span>
            </a>
          </li>
          <li className={`font-semibold relative group cursor-pointer w-fit`}>
            <a
              href="#experience"
              className={`text-slate-500 group-hover:text-slate-900 transition-colors ${
                activeSection === "experience"
                  ? "text-slate-900"
                  : "text-slate-400"
              }`}
            >
              Experience
              <span
                className={`absolute bottom-[2px] left-[-5px] h-[6px] w-[calc(100%+20px)] bg-cyan-600 opacity-30 scale-x-0 group-hover:scale-x-100 ${
                  activeSection === "experience" ? "scale-x-100" : "scale-x-0"
                } transition-all origin-left`}
              ></span>
            </a>
          </li>
          <li className={`font-semibold relative group cursor-pointer w-fit`}>
            <a
              href="#projects"
              className={`text-slate-500 group-hover:text-slate-900 transition-colors ${
                activeSection === "projects"
                  ? "text-slate-900"
                  : "text-slate-400"
              }`}
            >
              Projects
              <span
                className={`absolute bottom-[2px] left-[-5px] h-[6px] w-[calc(100%+20px)] bg-cyan-600 opacity-30 scale-x-0 group-hover:scale-x-100 ${
                  activeSection === "projects" ? "scale-x-100" : "scale-x-0"
                } transition-all origin-left`}
              ></span>
            </a>
          </li>
        </ul>
        <Link
          className={`w-fit mt-auto bg-transparent border border-cyan-800 py-2 px-8 rounded group hover:border-slate-800 relative overflow-hidden`}
          href={
            "https://drive.google.com/file/d/1LIPPtV8_RPLd0kYc97cqqBjaYJfqr7Cm/view?usp=sharing"
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          <p className="font-light relative z-[5]">Resume</p>
          <span className="absolute top-0 w-full h-full bg-cyan-600 opacity-30 left-0 group-hover:left-[100%] transition-all origin-left z-[1]"></span>
          <span className="absolute top-0 w-full h-full bg-[#e4796f] opacity-100 -left-[100%] group-hover:left-0 transition-all origin-left z-[1]"></span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/Danko2111"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaSquareGithub className="w-7 h-7 transition-colors hover:fill-[#e4796f]" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/daniel-kolesnitski/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="w-7 h-7 transition-colors hover:fill-[#e4796f]" />
          </Link>
          <div className="flex items-center gap-1">
            <button
              className="group border-2 border-black hover:border-[#e4796f] rounded-sm p-[2px] flex items-center justify-end transition-width duration-300 w-[25px] h-[25px] hover:w-[195px] overflow-hidden relative"
              onClick={showCopied}
            >
              <SiGmail className="min-w-4 min-h-4 absolute top-[2px] left-[2px] transition-colors group-hover:fill-[#e4796f]" />
              <span className="opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300 group-hover:delay-150 transition-none duration-300 text-xs font-light">
                Daniel.kolesnitski@gmail.com
              </span>
            </button>
            <span
              className={`text-green-500 text-xs flex gap-[2px] items-center opacity-0 cursor-default ${
                isResumeCopiedActive && "opacity-100"
              } transition-opacity`}
            >
              Copied
              <IoMdCheckmark className="w-[14px] h-[14px] fill-green-500" />
            </span>
          </div>
        </div>
      </header>
      <div className="lg:w-1/2 py-20 flex flex-col gap-24">
        <section className="scroll-mt-20" id="about">
          <div className="flex flex-col gap-4 w-11/12">
            <p className="break-words text-slate-500">
              I'm a full-stack developer who thrives on building accessible,
              high-performance applications that blend thoughtful design with
              robust engineering. I love working at the intersection of user
              experience and functionality, creating solutions that not only
              look great but also deliver a smooth, intuitive experience.
            </p>
            <p className="break-words text-slate-500">
              Currently, I'm a Full-Stack Developer at{" "}
              <a
                href="https://www.stackfive.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#e4796f] transition-colors"
              >
                Stack Five
              </a>
              , where I’ve worked on diverse projects across different
              industries. I've helped{" "}
              <a
                href="https://www.code4rena.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#e4796f] transition-colors"
              >
                modernize platforms
              </a>
              , build{" "}
              <a
                href="https://sunshinesnacks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#e4796f] transition-colors"
              >
                custom CMS solutions
              </a>
              , and{" "}
              <a
                href="https://york1.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#e4796f] transition-colors"
              >
                overhaul legacy front-ends
              </a>{" "}
              using technologies like Next.js and Sanity CMS. Collaborating
              closely with clients and teams, I ensure that each project meets
              high standards of quality and user satisfaction.
            </p>
            <p className="break-words text-slate-500">
              I also enjoyed my time as a Web Development TA at{" "}
              <a
                href="https://brainstation.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#e4796f] transition-colors"
              >
                BrainStation
              </a>
              , mentoring students through coding challenges and project
              reviews. It reinforced my passion for sharing knowledge and
              building a supportive tech community.
            </p>
            <p className="break-words text-slate-500">
              When I'm not coding, you can find me snowboarding in British
              Columbia’s mountains, tinkering with cars in the summer, or
              exploring new tech projects for fun.
            </p>
          </div>
        </section>
        <section className="scroll-mt-20" id="experience">
          <ul className="flex flex-col">
            <li>
              <div className="mb-10 flex flex-col md:flex-row">
                <span className="font-mono text-sm text-gray-500 whitespace-nowrap ml-4 md:ml-0 mt-[5px] w-[120px] flex-shrink-0">
                  2022 - PRESENT
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-[#e4796f] pl-4">
                    Full-Stack Developer · Stack Five (Agency)
                  </p>
                  <ul className="flex flex-col">
                    <Link
                      href={"https://www.code4rena.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="flex flex-col gap-1 hover:bg-cyan-600 hover:bg-opacity-5 transition-colors d p-4 rounded-md group">
                        <p className="text-md text-gray-700 flex gap-2 items-center group-hover:text-gray-700">
                          Code4rena - Smart Contract Auditing
                          <FaArrowLeft className="fill-gray-500 text-xs rotate-[135deg] -translate-x-[2px] translate-y-[2px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:fill-gray-700 transition-all" />
                        </p>
                        <p className="text-sm text-gray-500">
                          Optimized Code4rena's platform by refactoring the
                          front-end (Gatsby to Next.js, TypeScript), improving
                          APIs, and applying SOLID principles, reducing load
                          times by 40%. Developed a Sanity CMS blog that boosted
                          organic traffic by 25% and enhanced SEO. Led frontend
                          development for a Next.js web app, increasing user
                          engagement by 30%, while collaborating with
                          stakeholders to plan sprints and align features with
                          project goals.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Next.js
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Typescript
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Node.js
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Express
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Postgres
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Sanity CMS
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Jest
                          </span>
                        </div>
                      </li>
                    </Link>
                    <Link
                      href={"https://www.sunshinesnacks.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="flex flex-col gap-1 hover:bg-cyan-600 hover:bg-opacity-5 transition-colors d p-4 rounded-md group">
                        <p className="text-md text-gray-700 flex gap-2 items-center group-hover:text-gray-700">
                          Associated Brands Industries Ltd - Manufacturing
                          <FaArrowLeft className="fill-gray-500 text-xs rotate-[135deg] -translate-x-[2px] translate-y-[2px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:fill-gray-700 transition-all" />
                        </p>
                        <p className="text-sm text-gray-500">
                          Developed a distributor-facing website for Associated
                          Brands using a Next.js frontend and Sanity CMS
                          backend, improving product accessibility and client
                          engagement. Led meetings with design teams and
                          stakeholders, addressed feedback, and managed project
                          KPIs to ensure a successful launch.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Next.js
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Javascript
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Sanity CMS
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Tailwind
                          </span>
                        </div>
                      </li>
                    </Link>
                    <Link
                      href={"https://www.york1.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="flex flex-col gap-1 hover:bg-cyan-600 hover:bg-opacity-5 transition-colors d p-4 rounded-md group">
                        <p className="text-md text-gray-700 flex gap-2 items-center group-hover:text-gray-700">
                          York1 - Environmental Services
                          <FaArrowLeft className="fill-gray-500 text-xs rotate-[135deg] -translate-x-[2px] translate-y-[2px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:fill-gray-700 transition-all" />
                        </p>
                        <p className="text-sm text-gray-500">
                          Revamped York1's legacy frontend by implementing a
                          modern, scalable design and improving the overall
                          structure and styling. This overhaul enhanced
                          maintainability, provided a better user experience,
                          and reduced the bounce rate by 20%, contributing to
                          increased user retention and engagement.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            ASP.Net
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            HTML
                          </span>
                          <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                            Sass
                          </span>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="mb-10 flex flex-col md:flex-row">
                <span className="font-mono text-sm text-gray-500 whitespace-nowrap ml-4 md:ml-0 mt-[5px] w-[120px] flex-shrink-0">
                  2022 - 2022
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-[#e4796f] pl-4">
                    Web Development TA · BrainStation
                  </p>
                  <Link
                    href={"https://www.brainstation.io"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-col gap-1 hover:bg-cyan-600 hover:bg-opacity-5 transition-colors d p-4 rounded-md group">
                      <p className="text-md text-gray-700 flex gap-2 items-center group-hover:text-gray-700">
                        BrainStation - Bootcamp
                        <FaArrowLeft className="fill-gray-500 text-xs rotate-[135deg] -translate-x-[2px] translate-y-[2px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:fill-gray-700 transition-all" />
                      </p>
                      <p className="text-sm text-gray-500">
                        Due to my outstanding performance and proactive support
                        of fellow students during the bootcamp, I was invited to
                        return to BrainStation as a Teaching Assistant for the
                        next cohort. In this role, I provided one-on-one
                        mentorship, led group coding sessions, and reviewed
                        student projects. I facilitated programming challenges
                        and whiteboard exercises to strengthen their
                        problem-solving skills and ensured students felt
                        supported in overcoming technical hurdles.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          React
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Javascript
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Sass
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Node.js
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Express.js
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          MySQL
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Jest
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Postman
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="mb-10 flex flex-col md:flex-row">
                <span className="font-mono text-sm text-gray-500 whitespace-nowrap ml-4 md:ml-0 mt-[5px] w-[120px] flex-shrink-0">
                  2022 - 2022
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-[#e4796f] pl-4">
                    Student · BrainStation
                  </p>
                  <Link
                    href={"https://www.brainstation.io"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-col gap-1 hover:bg-cyan-600 hover:bg-opacity-5 transition-colors d p-4 rounded-md group">
                      <p className="text-md text-gray-700 flex gap-2 items-center group-hover:text-gray-700">
                        BrainStation - Web Development Bootcamp
                        <FaArrowLeft className="fill-gray-500 text-xs rotate-[135deg] -translate-x-[2px] translate-y-[2px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:fill-gray-700 transition-all" />
                      </p>
                      <p className="text-sm text-gray-500">
                        Completed an intensive full-stack development bootcamp
                        where I gained hands-on experience building dynamic web
                        applications. I developed strong proficiency in modern
                        technologies like JavaScript, React, Node.js, and MySQL,
                        and learned best practices for both front-end and
                        back-end development. Collaborating on team projects and
                        solving real-world challenges strengthened my
                        problem-solving skills and prepared me for delivering
                        production-ready code in fast-paced environments.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          React
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Javascript
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          HTML
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Sass
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Node.js
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Express.js
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          MySQL
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Jest
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Postman
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="mb-10 flex flex-col md:flex-row">
                <span className="font-mono text-sm text-gray-500 whitespace-nowrap ml-4 md:ml-0 mt-[5px] w-[120px] flex-shrink-0">
                  2020 - 2022
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-[#e4796f] pl-4">
                    Student · Douglas College
                  </p>
                  <Link
                    href={"https://www.douglascollege.ca/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-col gap-1 hover:bg-cyan-600 hover:bg-opacity-5 transition-colors d p-4 rounded-md group">
                      <p className="text-md text-gray-700 flex gap-2 items-center group-hover:text-gray-700">
                        Diploma - Computer Science
                        <FaArrowLeft className="fill-gray-500 text-xs rotate-[135deg] -translate-x-[2px] translate-y-[2px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:fill-gray-700 transition-all" />
                      </p>
                      <p className="text-sm text-gray-500">
                        Pursued a Computer Science and Information Systems
                        diploma at Douglas College, where I developed a solid
                        foundation in programming, data structures, and software
                        development principles. My studies emphasized both
                        theoretical concepts and practical applications,
                        covering key areas such as databases, networking, and
                        system analysis. Through hands-on projects and
                        collaborative assignments, I honed my problem-solving
                        abilities and gained experience in developing efficient,
                        real-world solutions.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          C#
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Java
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Javascript
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          HTML
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Sass
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Node.js
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          Express.js
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                          MySQL
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="scroll-mt-20" id="projects">
          <ul className="flex flex-col">
            <li>
              <Link href={"/case-study/warden-profiles"}>
                <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-[35px] p-4 group hover:bg-cyan-600 hover:bg-opacity-5 transition-colors rounded-md">
                  <div className="order-2 sm:order-1 flex flex-shrink-0 flex-col items-center justify-between w-44 lg:w-[120px] mt-1">
                    <Image
                      src={"/code4rena_profile_thumb.png"}
                      width={300}
                      height={200}
                      alt="Project thumbnail"
                      className="aspect-video object-fill rounded-sm border-2 border-cyan-600 border-opacity-5 group-hover:border-2 group-hover:border-cyan-600 group-hover:border-opacity-40 transition-colors"
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-1 order-1 sm:order-2">
                    <div className="text-md text-gray-700 flex gap-2 items-center group-hover:text-gray-700">
                      Code4rena - Warden Profiles
                      <div className="flex flex-nowrap items-center gap-1 group-hover:w-auto transition-width overflow-hidden">
                        <span className="text-xs text-slate-500 italic opacity-0 group-hover:opacity-100 transition-opacity -translate-x-full group-hover:translate-x-0 whitespace-nowrap">
                          Read Case Study
                        </span>
                        <FaArrowLeft className="fill-gray-500 text-xs rotate-180 group-hover:fill-gray-700 -translate-x-[100px] group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Developed Code4rena's Warden Profile pages to boost user
                      engagement and foster a more transparent and competitive
                      environment. Modeled after GitHub's profile system, these
                      pages showcased individual contributions, achievements,
                      daily participation metrics, leaderboard rankings, and
                      contribution effort grades. They also served as
                      professional portfolios, enabling wardens to use them as
                      resumes for their code auditing expertise.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Next.js
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Typescript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Sass
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/case-study/web-app"}>
                <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-[35px] p-4 group hover:bg-cyan-600 hover:bg-opacity-5 transition-colors rounded-md">
                  <div className="order-2 sm:order-1 flex flex-shrink-0 flex-col items-center justify-between w-44 lg:w-[120px] mt-1">
                    <Image
                      src={"/code4rena_web_app_thumb.png"}
                      width={300}
                      height={200}
                      alt="Project thumbnail"
                      className="aspect-video object-fill rounded-sm border-2 border-cyan-600 border-opacity-5 group-hover:border-2 group-hover:border-cyan-600 group-hover:border-opacity-40 transition-colors"
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-1 order-1 sm:order-2">
                    <div className="text-md text-gray-700 flex gap-2 items-center group-hover:text-gray-700">
                      Code4rena - Web App 1.0
                      <div className="flex flex-nowrap items-center gap-1 group-hover:w-auto transition-width overflow-hidden">
                        <span className="text-xs text-slate-500 italic opacity-0 group-hover:opacity-100 transition-opacity -translate-x-full group-hover:translate-x-0 whitespace-nowrap">
                          Read Case Study
                        </span>
                        <FaArrowLeft className="fill-gray-500 text-xs rotate-180 group-hover:fill-gray-700 -translate-x-[100px] group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Enhanced Code4rena’s platform by adding a dedicated,
                      task-focused web app experience for logged-in users.
                      Leveraging Next.js layout files, dynamic layouts and
                      styles were implemented for authenticated users, creating
                      a distinct experience that emphasizes functionality over
                      fluff.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Next.js
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Typescript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Sass
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Node.js
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/case-study/cms-blog"}>
                <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-[35px] p-4 group hover:bg-cyan-600 hover:bg-opacity-5 transition-colors rounded-md">
                  <div className="order-2 sm:order-1 flex flex-shrink-0 flex-col items-center justify-between w-44 lg:w-[120px] mt-1">
                    <Image
                      src={"/code4rena_blog_thumb.png"}
                      width={300}
                      height={200}
                      alt="Project thumbnail"
                      className="aspect-video object-fill rounded-sm border-2 border-cyan-600 border-opacity-5 group-hover:border-2 group-hover:border-cyan-600 group-hover:border-opacity-40 transition-colors"
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-1 order-1 sm:order-2">
                    <div className="text-md text-gray-700 flex gap-2 items-center group-hover:text-gray-700">
                      Code4rena - In-house CMS Blog
                      <div className="flex flex-nowrap items-center gap-1 group-hover:w-auto transition-width overflow-hidden">
                        <span className="text-xs text-slate-500 italic opacity-0 group-hover:opacity-100 transition-opacity -translate-x-full group-hover:translate-x-0 whitespace-nowrap">
                          Read Case Study
                        </span>
                        <FaArrowLeft className="fill-gray-500 text-xs rotate-180 group-hover:fill-gray-700 -translate-x-[100px] group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Developed an in-house blog for Code4rena using Sanity CMS
                      and Next.js, leveraging static routes to deliver
                      fast-loading, static pages for an enhanced user
                      experience. Migrating the blog content from Medium to the
                      main site not only centralized traffic but also improved
                      organic site traffic and SEO.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Next.js
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Typescript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Sass
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Sanity CMS
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/case-study/sunshine-snacks"}>
                <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-[35px] p-4 group hover:bg-cyan-600 hover:bg-opacity-5 transition-colors rounded-md">
                  <div className="order-2 sm:order-1 flex flex-shrink-0 flex-col items-center justify-between w-44 lg:w-[120px] mt-1">
                    <Image
                      src={"/SS_thumb.png"}
                      width={300}
                      height={200}
                      alt="Project thumbnail"
                      className="aspect-video object-fill rounded-sm border-2 border-cyan-600 border-opacity-5 group-hover:border-2 group-hover:border-cyan-600 group-hover:border-opacity-40 transition-colors"
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-1 order-1 sm:order-2">
                    <div className="text-md text-gray-700 flex gap-2 items-center group-hover:text-gray-700">
                      ABI Ltd - Sunshine Snacks
                      <div className="flex flex-nowrap items-center gap-1 group-hover:w-auto transition-width overflow-hidden">
                        <span className="text-xs text-slate-500 italic opacity-0 group-hover:opacity-100 transition-opacity -translate-x-full group-hover:translate-x-0 whitespace-nowrap">
                          Read Case Study
                        </span>
                        <FaArrowLeft className="fill-gray-500 text-xs rotate-180 group-hover:fill-gray-700 -translate-x-[100px] group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Developed a B2B product catalog platform for ABIL using
                      Next.js, Tailwind CSS, and Sanity CMS, providing
                      distributors with an efficient and user-friendly interface
                      to browse and manage product data. Led client and design
                      team meetings to ensure smooth collaboration and
                      successfully drive the project to completion.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Next.js
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Javascript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Tailwind
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                        Sanity CMS
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <Link
            href={"/archive"}
            className="text-sm group mt-8 inline-flex items-center gap-1 pl-4"
          >
            <span className="group-hover:border-b group-hover:border-[#e4796f] font-semibold text-gray-700">
              View Full Project Archive
            </span>
            <FaArrowLeft className="w-3 h-3 translate-x-[0px] group-hover:translate-x-2 rotate-180 transition-all inline" />
          </Link>
        </section>
      </div>
    </div>
  );
}
