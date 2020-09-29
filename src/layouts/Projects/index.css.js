import styled from "styled-components";
import { Container } from "../../components/Container/index.css";

export const ProjectsContainer = styled(Container)`
  background-color: #f5f5f5;
  min-height: 100vh;
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
