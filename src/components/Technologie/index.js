import React from "react";

import { Container } from "./index.css";

const Technolige = ({ text, src }) => {
  return (
    <Container>
      <div>
        <img src={src} alt={text} />
      </div>
      <p>{text}</p>
    </Container>
  );
};

export default Technolige;
