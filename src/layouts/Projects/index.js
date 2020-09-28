import React from "react";

import { Container, PortfolioLink } from "./index.css";
import { SectionHeader } from "../../components/Usefull/index.css";
import Link from "../../components/Link";
import projectData from "./projectsData.json";
import Project from "../../components/Project";
const Projects = () => {
  const projects = projectData.map((item, index) => (
    <Project key={item.name} props={item} order={index} />
  ));

  return (
    <Container>
      <SectionHeader>Projects</SectionHeader>
      {projects}
      <PortfolioLink>
        To see code of my portfolio click button below
        <Link github src="https://github.com/sid2602/Portfolio" />
      </PortfolioLink>
    </Container>
  );
};

export default Projects;
