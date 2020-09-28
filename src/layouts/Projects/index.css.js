import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 100vh;
  align-items: center;
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
