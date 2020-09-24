import React, { useEffect, useState } from "react";

import gsap from "gsap";
import { Nav, NavLink, List, Hamburger } from "./index.css";

const Navigation = ({ active }) => {
  useEffect(() => {
    gsap.from(".links", {
      x: "-=40",
      y: "-=25",
      opacity: 0,
      stagger: 0.15,
      delay: 1,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  const setActive = (bool) => {
    let rotate = bool ? 90 : 0;

    gsap.to(".hamburger", {
      duration: 0.5,
      rotation: rotate,
      ease: "power1.out",
    });

    setActiveMenu(bool);
  };

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <>
      <Nav active={active}>
        <NavLink href="#" name={1} className="links">
          Filip Kornaus
        </NavLink>
        <Hamburger
          className="links hamburger"
          onClick={() => setActive(!activeMenu)}
        >
          <i className="fas fa-bars"></i>
        </Hamburger>

        <List active={activeMenu} onClick={() => setActive(false)}>
          <li className="links">
            <NavLink href="#">Home</NavLink>
          </li>
          <li className="links">
            <NavLink href="#technologies">Technologies</NavLink>
          </li>
          <li className="links">
            <NavLink href="#projects">Projects</NavLink>
          </li>
          <li className="links">
            <NavLink href="#contact">Contact</NavLink>
          </li>
        </List>
      </Nav>
    </>
  );
};

export default Navigation;
