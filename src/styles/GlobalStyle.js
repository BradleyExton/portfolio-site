import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-size: 62.5%;
    font-family: poppins, sans-sarif;
    letter-spacing: 0.2rem
  }
  html {
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    // 1 rem = 10px; 10px/16px = 62.5%
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
