import React, { useEffect } from "react";

import { Container, Header, Arrow } from "./index.css";
import LapBig from "../../components/svgr/Lapbig";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

const Performance = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    const arrow = gsap.timeline();

    tl.fromTo(
      ".name",
      { opacity: 0, x: "-=15" },
      { duration: 1, x: "+=15", opacity: 1, delay: 0.5 }
    );

    tl.fromTo(
      ".motto",
      { opacity: 0, y: "-=20" },
      { duration: 1, y: "+=20", opacity: 1 }
    );

    arrow
      .fromTo(
        ".Arrow",
        { y: "-=10", opacity: 0 },
        { y: "0", opacity: 1, duration: 3, delay: 2 }
      )
      .to(".Arrow", { y: "+=10", opacity: 0, delay: 2, duration: 3 });
    arrow.repeat(-1);
  });

  return (
    <>
      <Container>
        <Header>
          <h1 className="name">Filip Kornaus</h1>
          <h2 className="motto">Websites created with passion</h2>
        </Header>
        <div>
          <LapBig />
        </div>
        <Arrow href="#technologies" className="Arrow">
          <i className="fas fa-chevron-down" />
        </Arrow>
      </Container>
    </>
  );
};

export default Performance;
