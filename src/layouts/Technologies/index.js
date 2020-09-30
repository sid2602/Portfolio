import React, { useEffect, useRef } from "react";

import { Container, FlexContainer } from "./index.css";
import { SectionHeader } from "../../components/SectionHeader/index.css";
import Technolige from "../../components/Technologie";
import technologiesData from "./technologiesData.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Technologies = () => {
  const technologiesRef = useRef([]);
  technologiesRef.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      technologiesRef.current,
      { opacity: 0, y: "+=30" },
      {
        duration: 2,
        opacity: 1,
        y: "0",
        stagger: 0.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: technologiesRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  const addToTechnologies = (e) => {
    if (e && !technologiesRef.current.includes(e)) {
      technologiesRef.current.push(e);
    }
  };

  const technologies = technologiesData.map((item) => (
    <Technolige key={item.text} src={item.src} text={item.text} />
  ));

  return (
    <Container id="Technologies">
      <SectionHeader primary ref={addToTechnologies}>
        Technologies
      </SectionHeader>
      <FlexContainer ref={addToTechnologies}>{technologies}</FlexContainer>
    </Container>
  );
};

export default Technologies;
