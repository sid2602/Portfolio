import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *{
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body{
    font-family: 'Source Sans Pro', sans-serif;
    overflow-x: hidden;
    
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style-type: none;
  }
`;

// font-family: 'Kalam', cursive;
// font-family: 'Lato', sans-serif;
