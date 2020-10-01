import styled from "styled-components";
import { Container } from "../../components/Container/index.css";

export const ProjectsContainer = styled(Container)`
  background-color: #f5f5f5;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

export const PortfolioLink = styled.p`
  font-size: 1.5em;

  a {
    font-size: 1em;
    margin: 1em auto;
  }

  @media (max-width: 650px) {
    font-size: 1em;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 25vw;
  height: 25vw;

  border-radius: 50%;
  background-color: #78beff;
  top: ${({ top }) => top + "%"};
  left: ${({ primary }) => (primary ? "100%" : "0")};
  transform: translate(-50%, -50%);

  @media (max-width: 1024px) {
    width: 45vw;
    height: 45vw;
  }
`;
