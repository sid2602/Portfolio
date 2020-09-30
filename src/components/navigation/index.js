import React, { useEffect, useState, useRef } from "react";

import gsap from "gsap";
import { Nav, NavLink, List, Hamburger } from "./index.css";

const Navigation = () => {
  const hamburger = useRef(null);
  const links = useRef([]);
  links.current = [];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    links.current.push(hamburger.current);
    gsap.from(links.current, {
      x: "-=40",
      y: "-=25",
      opacity: 0,
      stagger: 0.15,
      delay: 1,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  const addToLinks = (e) => {
    if (e && !links.current.includes(e)) {
      links.current.push(e);
    }
  };

  const setActive = (bool) => {
    let rotate = bool ? 90 : 0;

    gsap.to(hamburger.current, {
      duration: 0.5,
      rotation: rotate,
      ease: "power1.out",
    });

    setActiveMenu(bool);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const [activeMenu, setActiveMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationLinks = ["Home", "Technologies", "Projects", "Contact"];

  const linksMap = navigationLinks.map((item) => (
    <li ref={addToLinks} key={item}>
      <NavLink href={`#${item}`}>{item}</NavLink>
    </li>
  ));

  return (
    <>
      <Nav active={scrolled}>
        <NavLink href="#Home" name={1} ref={addToLinks}>
          Filip Kornaus
        </NavLink>
        <Hamburger ref={hamburger} onClick={() => setActive(!activeMenu)}>
          <i className="fas fa-bars"></i>
        </Hamburger>

        <List active={activeMenu} onClick={() => setActive(false)}>
          {linksMap}
        </List>
      </Nav>
    </>
  );
};

export default Navigation;
