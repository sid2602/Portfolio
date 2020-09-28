import React from "react";

import { Button } from "./index.css";

const GitButton = ({ src }) => (
  <Button github href={src} target="_blank" rel="noopener noreferrer">
    Github <i className="fab fa-github"></i>
  </Button>
);
const LiveButton = ({ src }) => (
  <Button href={src} target="_blank" rel="noopener noreferrer">
    Live <i className="fas fa-angle-right"></i>{" "}
  </Button>
);

const Link = ({ github, src }) => {
  return <>{github ? <GitButton src={src} /> : <LiveButton src={src} />}</>;
};

export default Link;
