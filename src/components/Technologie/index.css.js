import styled from "styled-components";

export const TechnologieContainer = styled.div`
  flex-basis: 15%;
  width: 150px;
  margin: 0 1em;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: white;
  text-align: center;

  div {
    width: 100%;
    height: 50%;
    text-align: center;
  }

  div img {
    height: 100%;
  }

  @media (max-width: 1024px) {
    height: 150px;
    flex-basis: 20%;
  }

  @media (max-width: 870px) {
    height: 120px;
  }

  @media (max-width: 650px) {
    flex-basis: 25%;
    height: 100px;
    margin: 0 0.5em;
    font-size: 0.8em;
  }

  @media (max-width: 350px) {
    height: 80px;
    font-size: 0.6em;
  }
`;
