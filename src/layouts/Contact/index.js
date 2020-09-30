import React, { useEffect, useRef } from "react";

import { ContactContainer, Icons } from "./index.css";
import { SectionHeader } from "../../components/SectionHeader/index.css";
import iconsData from "./iconsData.json";

const icons = iconsData.map((item) => (
  <a
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    key={item.class}
  >
    <i className={item.class}></i>
    <p>{item.text}</p>
  </a>
));

const Contact = () => {
  return (
    <ContactContainer id="Contact">
      <SectionHeader primary>Contact</SectionHeader>
      <Icons>{icons}</Icons>
    </ContactContainer>
  );
};

export default Contact;
