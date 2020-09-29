import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #78beff;
  position: relative;

  &:before {
    content: " ";
    width: 100%;
    height: 10vh;
    top: 0;
    left: 0;
    background: #f5f5f5;
    position: absolute;
    transform: rotate(180deg);
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    border: 1px solid #f5f5f5;
  }

  h2 {
    margin: 1.5em 0;
  }
`;

export const Icons = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;

  a {
    color: white;
    display: flex;
    flex-direction: column;
    transition: 0.2s;
    text-align: center;
    width: 25%;
  }

  a:hover {
    color: #f5f5f5;
  }

  i {
    font-size: 4em;
  }

  p {
    font-size: 1.5em;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 50%;
    justify-content: space-around;
    a {
      width: 100%;
      height: 25%;
      flex-direction: row;
    }

    p {
      margin: 1em;
    }
  }

  @media (max-width: 650px) {
    i {
      font-size: 3em;
    }

    p {
      font-size: 0.8em;
    }
  }
`;
