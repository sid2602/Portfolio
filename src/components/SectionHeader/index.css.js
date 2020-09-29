import styled from "styled-components";

export const SectionHeader = styled.h2`
  font-size: 3em;
  font-family: "Lato", sans-serif;
  color: ${({ primary }) => (primary ? "white" : "black")};
  text-align: center;
  display: block;
  margin: 0;
  padding: 1em 0;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 650px) {
    font-size: 2em;
  }
`;
