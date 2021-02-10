import React, { useEffect, useRef } from "react";

import { ProjectsContainer, PortfolioLink, Circle } from "./index.css";
import { SectionHeader } from "../../components/SectionHeader/index.css";
import Link from "../../components/Link";
import projectData from "./projectsData.json";
import Project from "../../components/Project";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SubHeader from "../../components/SubHeader/index.css";
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
      <Circle top={35} />
      <Circle top={80} primary />
      <SectionHeader>Projects</SectionHeader>
      <SubHeader>Some apps need time to wake up. Wait for them :D</SubHeader>
      {projects}
      <PortfolioLink ref={portfolioLinkRef}>
        To see code of my portfolio click button below
        <Link github src="https://github.com/sid2602/Portfolio" />
      </PortfolioLink>
    </ProjectsContainer>
  );
};

export default Projects;
