import styled from "styled-components";

export const SVG = styled.svg`
  width: 600px;
  height: 700px;

  @media (max-width: 1215px) {
    width: 500px;
    height: 600px;
  }

  @media (max-width: 1025px) {
    width: 400px;
    height: 500px;
  }

  @media (max-width: 750px) {
    width: 350px;
    height: 400px;
  }

  @media (max-width: 400px) {
    width: 300px;
    height: 350px;
  }
`;

export const Laptop = styled.g`
  opacity: 0;
`;
