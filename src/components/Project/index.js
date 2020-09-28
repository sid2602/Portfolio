import React from "react";

import {
  ProjectContainer,
  Content,
  Screenshoot,
  LinkContainer,
} from "./index.css";
import Link from "../Link";

const Project = ({ props, order }) => {
  const { name, live, text, github, img } = props;

  return (
    <ProjectContainer>
      <Content order={order} className="Content">
        <h3>{name}</h3>
        <p>{text}</p>
        <LinkContainer>
          <Link src={live} />
          <Link github src={github} />
        </LinkContainer>
      </Content>
      <Screenshoot order={order} className="ScreenShoot">
        <img src={img} alt={name} />
      </Screenshoot>
    </ProjectContainer>
  );
};

export default Project;
