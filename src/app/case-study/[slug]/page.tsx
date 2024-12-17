"use client";

import ProjectCaseStudy from "@/components/body/ProjectCaseStudy";
import { useParams } from "next/navigation";

const ProjectCaseStudyList = [
  {
    slug: "warden-profiles",
    title: "Code4rena Warden Profiles",
    date: "April 2023",
    images: ["/code4rena_profile_thumb.png"],
    body: [
      "At Code4rena, I spearheaded the development of Warden Profile pages to enhance user engagement and transparency within the platform. The primary goal was to create a space where users could not only view their contributions but also showcase their achievements, fostering a sense of accomplishment and competition. These profiles became a cornerstone of the platform’s ecosystem, driving interaction and encouraging higher participation.",
      "Drawing inspiration from GitHub’s profile system, we designed a comprehensive dashboard that displayed daily participation metrics, leaderboard rankings, and contribution effort grades. This level of detail helped wardens track their performance over time and see how they stacked up against peers, adding an engaging, competitive edge to the platform.",
      "Additionally, the profiles were engineered to function as professional resumes, highlighting each warden's involvement in code auditing contests, their key achievements, and overall contributions. This transparency not only motivated wardens to increase their participation but also provided them with a valuable tool to demonstrate their skills to potential employers or collaborators.",
      "Through this initiative, the Warden Profile pages successfully blended functionality with user-centric design, enriching the platform's community while aligning with Code4rena’s mission to elevate transparency and engagement in code auditing.",
    ],
  },
  {
    slug: "web-app",
    title: "Code4rena Web App 1.0",
    date: "August 2023",
    images: ["/code4rena_web_app_thumb.png"],
    body: [
      "I took the lead in creating a dedicated web app for Code4rena that transformed the experience for logged-in users. The initiative focused on building a task-oriented interface to streamline workflows, prioritize functionality, and reduce clutter. This approach catered to the unique needs of the platform's active user base, fostering efficiency and usability.",
      "Using Next.js layout files, I implemented dynamic layouts and styles specifically for authenticated users. This architecture allowed us to deliver a customized and performance-optimized experience. The design ensured that all essential features were easily accessible, enabling users to focus on tasks with minimal distractions.",
      "The web app emphasized productivity by aligning technical decisions with user needs. Features like adaptive layouts and streamlined workflows fostered a sense of purpose and empowerment among users. This task-focused design further increased engagement, reinforcing Code4rena's commitment to innovation and user satisfaction.",
      "By combining user-centric design with robust technical execution, this project elevated the platform’s overall functionality. The web app became an integral part of the Code4rena ecosystem, solidifying its reputation as a leader in providing practical solutions for its community of users.",
    ],
  },
  {
    slug: "cms-blog",
    title: "Code4rena In-house CMS Blog",
    date: "Jan 2024",
    images: ["/code4rena_blog_thumb.png"],
    body: [
      "To centralize content and improve SEO performance, I developed an in-house blog for Code4rena, migrating content from Medium to the main site. This integration allowed users to view all content directly on the platform, eliminating the need to navigate between different sites.",
      "Using Sanity CMS and Next.js, I built the blog with static routes to deliver fast-loading pages, improving performance and user engagement. This approach optimized the platform's content delivery, ensuring quick and easy access to vital information.",
      "The migration also provided significant SEO benefits by hosting the blog content directly on the site. This not only improved organic traffic but also made the platform more visible in search engine results, driving more potential users to the site.",
      "Throughout the project, I handled communication and planning between the client and design teams to ensure smooth collaboration. By integrating the blog into the main site and optimizing performance, I contributed to Code4rena’s mission of enhancing transparency and user engagement.",
    ],
  },
  {
    slug: "sunshine-snacks",
    title: "ABIL Sunshine Snacks",
    date: "March 2023",
    images: ["/SS_thumb.png"],
    body: [
      "At Associated Brands Industries Ltd (ABIL), I directed the development of a B2B product catalog platform designed to meet the needs of distributors. The platform was built using Next.js, Tailwind CSS, and Sanity CMS, providing an intuitive interface for browsing and managing product data. The project’s goal was to create an efficient, user-centric solution tailored to ABIL’s operational and business objectives.",
      "Throughout the process, I worked closely with stakeholders and design teams to ensure alignment on goals and requirements. Regular collaboration and feedback sessions enabled us to refine the platform’s features, resulting in a product that exceeded client expectations. These discussions fostered clear communication and ensured a seamless development workflow.",
      "The platform featured a scalable architecture that balanced robust functionality with sleek design. From product navigation to data management tools, every element was crafted to enhance the distributor experience. This user-friendly approach streamlined operations and improved the overall efficiency of ABIL’s business processes.",
      "By delivering a polished and performance-driven solution, this project strengthened ABIL’s relationships with its partners and reinforced its position in the competitive B2B market. The catalog platform demonstrated the value of combining technical expertise with user-centric design to achieve impactful business outcomes.",
    ],
  },
];

export default function CaseStudyPage() {
  const { slug } = useParams();

  const projectData = ProjectCaseStudyList.find(
    (projectData) => projectData.slug === slug
  );

  const projectsListShortened = ProjectCaseStudyList.filter(
    (project) => project.slug !== slug
  ).map((project) => ({
    title: project.title,
    date: project.date,
    image: project.images[0],
    slug: project.slug,
  }));

  return (
    <div className="bg-cyan-50">
      {projectData && (
        <ProjectCaseStudy
          projectData={projectData}
          projects={projectsListShortened}
        />
      )}
    </div>
  );
}
