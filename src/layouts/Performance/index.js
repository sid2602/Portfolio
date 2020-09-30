import React, { useEffect, useRef } from "react";

import { PerformaceContainer, Header, Arrow } from "./index.css";
import LapBig from "../../components/svgr/Lapbig";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

const Performance = () => {
  const nameRef = useRef(null);
  const mottoRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    const arrow = gsap.timeline();

    tl.fromTo(
      nameRef.current,
      { opacity: 0, x: "-=15" },
      { duration: 1, x: "+=15", opacity: 1, delay: 0.5 }
    );

    tl.fromTo(
      mottoRef.current,
      { opacity: 0, y: "-=20" },
      { duration: 1, y: "+=20", opacity: 1 }
    );

    arrow
      .fromTo(
        arrowRef.current,
        { y: "-=10", opacity: 0 },
        { y: "0", opacity: 1, duration: 3, delay: 2 }
      )
      .to(arrowRef.current, { y: "+=10", opacity: 0, delay: 2, duration: 3 });
    arrow.repeat(-1);
  });

  return (
    <PerformaceContainer id="Home">
      <Header>
        <h1 ref={nameRef}>Filip Kornaus</h1>
        <h2 ref={mottoRef}>Websites created with passion</h2>
      </Header>
      <div>
        <LapBig />
      </div>
      <Arrow href="#technologies" ref={arrowRef}>
        <i className="fas fa-chevron-down" />
      </Arrow>
    </PerformaceContainer>
  );
};

export default Performance;
