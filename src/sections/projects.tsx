'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "@/context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import AboutBgSvg from "@/components/AboutBgSvg";

import tomatoDiseaseClassifier from "../../public/projects/tomato-health.jpg";
import obscuriumIo from "../../public/projects/obscuriumIo.png";
import nakuja from "../../public/projects/basestation.png";


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
    <section ref={sectionRef} id="projects" className="section relative bg-white min-h-[800px] lg:min-h[700px] dark:bg-[#1B2731] ">
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
        Here are some of my projects:
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/brian-io"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
      <AboutBgSvg />
    </section>
  );
};

const projects = [
  {
    title: "ObscuriumIO",
    type: "Frontend",
    image: (
      <Image
        src={obscuriumIo}
        sizes="100vw"
        fill
        alt="Logistics Website"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Obscurium is a responsive, single-page web application built with modern frontend technologies. It features a clean, component-based architecture likely implemented with React (Next.js), Tailwind CSS for utility-first styling, and smooth UI interactions tailored for performance and scalability. The design emphasizes clear CTAs, responsive layout grids, and layered visuals using gradients, SVGs, and background patterns — ideal for showcasing a SaaS or B2B platform.",
    tags: ["NextJs", "TypeScript", "App Router", "TailwindCSS"],
    liveUrl: "https://obscuriumio.vercel.dev/",
    codeUrl: "https://github.com/brian-io/obscurium",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/brian-io/obscuriumio",
  },
  {
    title: "Tomato Leaf Disease Classifier",
    type: "Frontend + Backend + ML",
    image: (
      <Image
        src={tomatoDiseaseClassifier}
        sizes="100vw"
        fill
        alt="Tomato Leaf Disease Classifier"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A simple web application that classifies tomato leaf images to their respective disease class. Built with React and FastApi on the backend. Leverages api calls to an ML classifier model hosted in an S3 bucket",
    tags: ["React", "TypeScript", "FastApi"],
    liveUrl: "#",
    codeUrl: "https://github.com/brian-io/tomato-leaf-classifier",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "#",
  },
  {
    title: "Nakuja Basestation",
    type: "Frontend",
    image: (
      <Image
        src={nakuja}
        sizes="100vw"
        fill
        alt="Nakuja Basestation App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A web application where users can monitor various telemetry data from a Flight computer and remotely configure the flight computer through various commands.",
    tags: ["ReactJs", "Docker", "ChartJs", "MQTT"],
    liveUrl: "#",
    codeUrl: "https://github.com/brian-io/n4-basestation",
    bgColor: "bg-[#A6CECE]",
    githubApi: "#",
  },
];

