import React, { useEffect } from "react";

import { Container, FlexContainer } from "./index.css";
import { SectionHeader } from "../../components/SectionHeader/index.css";
import Technolige from "../../components/Technologie";
import technologiesData from "./technologiesData.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Technologies = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".Technologie",
      { opacity: 0, y: "+=30" },
      {
        duration: 2,
        opacity: 1,
        y: "0",
        stagger: 0.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".Technologie",
          start: "top 60%",
        },
      }
    );
  }, []);

  const technologies = technologiesData.map((item) => (
    <Technolige key={item.name} src={item.src} text={item.text} />
  ));
  return (
    <Container id="technologies">
      <SectionHeader primary className="Technologie">
        Technologies
      </SectionHeader>
      <FlexContainer className="Technologie">{technologies}</FlexContainer>
    </Container>
  );
};

export default Technologies;
