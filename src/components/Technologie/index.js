import React from "react";

import { TechnologieContainer } from "./index.css";

const Technolige = ({ text, src }) => {
  return (
    <TechnologieContainer>
      <div>
        <img src={src} alt={text} />
      </div>
      <p>{text}</p>
    </TechnologieContainer>
  );
};

export default Technolige;
