import styled from "styled-components";

export const Button = styled.a`
  display: block;
  text-align: center;
  font-size: 1.5em;
  background-color: ${({ github }) => (github ? "#ABABAB" : "#78BEFF")};
  color: white;
  border-radius: 5px;
  width: 150px;
  line-height: 46px;
  height: 50px;
  transition: 0.2s;
  margin-top: 1em;
  border: 2px solid ${({ github }) => (github ? "#BABABA" : "#8ac7ff")};

  :hover {
    background-color: ${({ github }) => (github ? "#BABABA" : "#8ac7ff")};
  }

  @media (max-width: 650px) {
    width: 100px;
    height: 35px;
    line-height: 28px;
    font-size: 1em;
  }
`;
