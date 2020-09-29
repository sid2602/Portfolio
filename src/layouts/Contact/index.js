import React from "react";

import { ContactContainer, Icons } from "./index.css";
import { SectionHeader } from "../../components/SectionHeader/index.css";
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <SectionHeader primary>Contact</SectionHeader>
      <Icons>
        <a href="mailto:kornaus.filip@gmail.com">
          <i className="fas fa-envelope"></i>
          <p>Contact me by email kornaus.filip@gmail.com</p>
        </a>

        <a
          href="https://www.facebook.com/filip.kornaus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
          <p>Send me message on Facebook</p>
        </a>

        <a
          href="https://github.com/sid2602"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <p>Whatch my profile on github</p>
        </a>
      </Icons>
    </ContactContainer>
  );
};

export default Contact;
