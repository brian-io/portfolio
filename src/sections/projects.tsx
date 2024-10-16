'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "@/context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";

import tomatoDiseaseClassifier from "../../public/projects/tomato-health.jpg";
import nextjsDashboard from "../../public/projects/nextjs-dashboard.png";
import nakuja from "../../public/projects/nakuja.jpg";


export default function Projects () {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/mikwaDev"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "NextJs Dashboard",
    type: "Frontend",
    image: (
      <Image
        src={nextjsDashboard}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A minimal, accessible and SEO-friendly app. Uses the new Next.js App Router. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.",
    tags: ["NextJs", "TypeScript", "App Router", "TailwindCSS"],
    liveUrl: "https://nextjs-dashboard-bmm.vercel.dev/",
    codeUrl: "https://github.com/mikwaDev/nexjs-dashboard",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/mikwaDev/nextjs-dashboard",
  },
  {
    title: "Tomato-Leaf Disease Classifier",
    type: "Frontend + Backend",
    image: (
      <Image
        src={tomatoDiseaseClassifier}
        sizes="100vw"
        fill
        alt="Tomato Leaf Disease Classifier"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Built with ReactJs and FastApi on the backend. Leverages Api calls to an ML classifier model hosted in an S3 bucket",
    tags: ["React", "TypeScript", "Styled-Components"],
    liveUrl: "",
    codeUrl: "",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "",
  },
  {
    title: "Nakuja",
    type: "Frontend",
    image: (
      <Image
        src={nakuja}
        sizes="100vw"
        fill
        alt="Haru Fashion App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An Telemetry web application where users can monitor various telemtry data from a Flight computer, built with ReactJs + MQTT and Websocket protocols.",
    tags: ["ReactJs", "Javascript", "TailwindCSS"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-[#A6CECE]",
    githubApi: "#",
  },
];

