import React from "react";

import { Container, FlexContainer } from "./index.css";
import { SectionHeader } from "../../components/Usefull/index.css";
import Technolige from "../../components/Technologie";
import technologiesData from "./technologiesData.json";
const Technologies = () => {
  // console.log(technologiesData);
  const technologies = technologiesData.map((item) => (
    <Technolige key={item.name} src={item.src} text={item.text} />
  ));
  return (
    <Container>
      <SectionHeader primary>Technologies</SectionHeader>
      <FlexContainer>{technologies}</FlexContainer>
    </Container>
  );
};

export default Technologies;
