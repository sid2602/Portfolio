import styled from "styled-components";

export const Container = styled.section`
  height: 110vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1852c2;
  position: relative;

  &:before {
    content: " ";
    width: 100%;
    height: 10vh;
    bottom: 0;
    left: 0;
    background: #f5f5f5;
    position: absolute;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }
`;

export const FlexContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 90%;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
