import styled from "styled-components";
import { Container } from "../../components/Container/index.css";

export const PerformaceContainer = styled(Container)`
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  background: rgb(120, 190, 255);
  background: linear-gradient(
    180deg,
    rgba(120, 190, 255, 1) 0%,
    rgba(24, 82, 194, 1) 100%
  );

  @media (max-width: 1023px) {
    flex-direction: column;
  }

  @media (max-width: 1023px) and (max-height: 800px) {
    justify-content: flex-end;
  }
`;

export const Header = styled.header`
  margin: 0 5em;

  h1 {
    font-family: "Kalam", cursive;
    color: white;
    font-size: 5em;
    margin: 0;
  }

  h2 {
    color: #dedede;
    font-weight: normal;
  }

  @media (max-width: 1215px) {
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 1.5em;
    }
  }

  @media (max-width: 1023px) {
    text-align: center;
    h1 {
      font-size: 4em;
    }
  }

  @media (max-width: 750px) {
    h1 {
      font-size: 3.5em;
    }
  }

  @media (max-width: 350px) {
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 1em;
    }
  }
`;

export const Arrow = styled.a`
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, -50%);
  padding: 1em;
  i {
    font-size: 2em;
    color: white;
  }
`;
