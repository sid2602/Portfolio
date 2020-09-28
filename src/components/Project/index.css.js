import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 90%;

  margin: 4em 0;
  display: flex;

  justify-content: space-around;

  @media (max-width: 1025px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 400px;
  height: 100%;
  font-family: "Lato", sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  order: ${({ order }) => order % 2};

  h3 {
    text-align: center;
    font-size: 2em;
  }

  p {
    // padding: 0 1.5em;
    line-height: 1.5em;
    font-size: 1.2em;
  }

  @media (max-width: 1025px) {
    order: 0;
    width: 80%;
    height: 50%;

    p {
      font-size: 1.5em;
    }
  }

  @media (max-width: 650px) {
    h3 {
      font-size: 1.5em;
    }
    p {
      font-size: 1em;
    }
  }
`;

export const Screenshoot = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  align-items: center;
  order: 0;
  img {
    width: 100%;
    box-shadow: ${({ order }) =>
      order % 2 === 0
        ? "-14px 14px 5px 0px rgba(0, 0, 0, 0.25)"
        : "14px 14px 5px 0px rgba(0, 0, 0, 0.25)"};
  }

  @media (max-width: 1025px) {
    order: 1;
    width: 70%;
    height: 30%;
  }

  @media (max-width: 650px) {
    width: 90%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1024px) {
    margin-bottom: 2em;
  }
`;
