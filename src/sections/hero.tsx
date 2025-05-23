'use client';

import LinkButton from "@/components/LinkButton";
import { useRef, useEffect } from "react";
import useScrollActive from "@/hooks/useScrollActive";
import { useSection } from "@/context/section";

import brianMikwa from "../../public/brianMikwa-illustration1.png";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";


export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
    // bg text parallax effect
    gsap.to(".bg-text", {
      scrollTrigger: {
        trigger: ".bg-text",
        scrub: true,
      },
      y: 350,
    });

    // text animation after initial load
    let tl = gsap.timeline({ defaults: { stagger: 0.2, duration: 0.3 } });
    tl.fromTo(".text-animation", { y: 100 }, { y: 0, delay: 1 });

    // illustration floating effect
    let imgTl = gsap.timeline({ repeat: -1 });
    imgTl.set(".image-animation", { x: 0, y: 0 });
    imgTl
      .to(".image-animation", {
        duration: 3,
        y: "-=20",
        ease: "power3.easeinOut",
      })
      .to(".image-animation", { 
        duration: 3, 
        y: "+=20",
        ease: "power3.easeinOut",
      });
    
     
    }, 
    { scope: sectionRef}
  );

  // Set active link for contact section
  const heroSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
     heroSection && onSectionChange!("home");

  }, [heroSection, onSectionChange]);

    return (
    <section
      ref={sectionRef}
      id="home"
      className="relative mt-16 sm:mt-8 pt-8 lg:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-[800px]  mb-[20%] mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse"
    >
      <span
        aria-hidden="true"
        className="bg-text absolute -top-36 rotate-12 text-gray-100 dark:text-[#1f2e3a] text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center -z-0"
      >
        FULL-STACK DEVELOPER BACKEND FRONTEND FREELANCE
      </span>

      <div className="image-animation z-10 select-none mt-0 xs:mt-6 sm:mt-14 lg:mt-0 px-0 mx-auto lg:p-0 lg:basis-1/3">
        <div className="relative w-72 md:w-80 h-80 flex items-center mx-auto">
          <div className="absolute pointer-events-none scale-90 xs:scale-95 mx-auto">
            <Image
              src={brianMikwa}
              width={1177}
              height={1374}
              priority
              id="character-illustration"
              aria-label="Brian Munene character illustration levitating with a Macbook"
              alt="Brian Munene character illustration"
            />
          </div>
          
        </div>
      </div>

      <div className="lg:basis-2/3 z-10 relative">
        <span className="text-marrsgreen lg:text-lg font-medium dark:text-carrigreen">
          Hello My Name is
        </span>
        <div className="overflow-hidden">
          <h1 className="text-animation text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">
            Brian Mikwa
          </h1>
        </div>
        <div className="overflow-hidden">
          <span className="text-animation text-2xl md:text-3xl lg:text-5xl block md:my-3 text-marrsgreen dark:text-carrigreen font-medium">
            A Full-stack Developer
          </span>
        </div>
        <div className="mt-2 my-4 md:mb-8">
          <p className="mb-1">
            I am a Full-Stack Developer with a passion for delivering
            exceptional results.
          </p>
          <p>
            With my expertise in React and NextJS on the frontend, and Python Django, FastAPI,
            PHP, Laravel, NodeJS and Express on the backend, I bring a unique
            combination of technical skills and creative problem-solving to
            every project I work on.
          </p>
        </div>
        <LinkButton href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
          Contact me!
        </LinkButton>
      </div>
      <Link
        href="#projects"
        className="group absolute link-outline animate-bounce hidden md:bottom-14 lg:bottom-16 left-1/2 transform -translate-x-1/2 md:flex items-center flex-col"
      >
        <span className="group-hover:text-marrsgreen dark:group-hover:text-carrigreen">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="dark:fill-bglight group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
          <path d="M11 6h2v6h-2z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="dark:fill-bglight group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </Link>
    </section>

    );
} 