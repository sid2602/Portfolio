import React, { useEffect, useRef } from "react";

import {
  ProjectContainer,
  Content,
  Screenshoot,
  LinkContainer,
} from "./index.css";
import Link from "../Link";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Project = ({ props, order }) => {
  const { name, live, text, github, img } = props;

  const contentRef = useRef(null);
  const screenShotRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: "+=10" },
      {
        duration: 1,
        opacity: 1,
        y: "0",
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 60%",
        },
      }
    );

    gsap.fromTo(
      screenShotRef.current,
      { opacity: 0, x: `${order % 2 === 0 ? "+=10" : "-=10"}` },
      {
        duration: 1,
        opacity: 1,
        x: "0",
        stagger: 0.2,
        scrollTrigger: {
          trigger: screenShotRef.current,
          start: "top 60%",
        },
      }
    );
  });

  return (
    <ProjectContainer>
      <Content order={order} className="Content" ref={contentRef}>
        <h3>{name}</h3>
        <p>{text}</p>
        <LinkContainer>
          <Link src={live} />
          <Link github src={github} />
        </LinkContainer>
      </Content>
      <Screenshoot order={order} ref={screenShotRef}>
        <img src={img} alt={name} />
      </Screenshoot>
    </ProjectContainer>
  );
};

export default Project;
