import React, { useEffect } from "react";

import { Container, PortfolioLink } from "./index.css";
import { SectionHeader } from "../../components/Usefull/index.css";
import Link from "../../components/Link";
import projectData from "./projectsData.json";
import Project from "../../components/Project";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Projects = () => {
  const projects = projectData.map((item, index) => (
    <Project key={item.name} props={item} order={index} />
  ));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const contents = document.querySelectorAll(".Content");
    const screenShoots = document.querySelectorAll(".ScreenShoot");

    contents.forEach((content) => {
      gsap.fromTo(
        content.children,
        { opacity: 0, y: "+=10" },
        {
          duration: 1,
          opacity: 1,
          y: "0",
          stagger: 0.2,
          scrollTrigger: {
            trigger: content,
            start: "top 60%",
          },
        }
      );
    });

    screenShoots.forEach((shoot, index) => {
      gsap.fromTo(
        shoot,
        { opacity: 0, x: `${index % 2 === 0 ? "+=10" : "-=10"}` },
        {
          duration: 1,
          opacity: 1,
          x: "0",
          stagger: 0.2,
          scrollTrigger: {
            trigger: shoot,
            start: "top 60%",
          },
        }
      );
    });

    gsap.from(".PortfolioLink", {
      opacity: 0,
      duration: 1,
      delay: 0.2,
      y: "+=10",
      scrollTrigger: {
        trigger: ".PortfolioLink",
        start: "top bottom",
      },
    });
  }, []);

  return (
    <Container>
      <SectionHeader>Projects</SectionHeader>
      {projects}
      <PortfolioLink className="PortfolioLink">
        To see code of my portfolio click button below
        <Link github src="https://github.com/sid2602/Portfolio" />
      </PortfolioLink>
    </Container>
  );
};

export default Projects;
