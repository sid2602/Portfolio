import React, { useEffect, useRef } from "react";

import { ProjectsContainer, PortfolioLink } from "./index.css";
import { SectionHeader } from "../../components/SectionHeader/index.css";
import Link from "../../components/Link";
import projectData from "./projectsData.json";
import Project from "../../components/Project";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Projects = () => {
  const portfolioLinkRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(portfolioLinkRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.2,
      y: "+=10",
      scrollTrigger: {
        trigger: portfolioLinkRef.current,
        start: "top bottom",
      },
    });
  }, []);

  const projects = projectData.map((item, index) => (
    <Project key={item.name} props={item} order={index} />
  ));

  return (
    <ProjectsContainer id="Projects">
      <SectionHeader>Projects</SectionHeader>
      {projects}
      <PortfolioLink ref={portfolioLinkRef}>
        To see code of my portfolio click button below
        <Link github src="https://github.com/sid2602/Portfolio" />
      </PortfolioLink>
    </ProjectsContainer>
  );
};

export default Projects;
