import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

html,
  body {
    font-family: 'Roboto';
    padding: 0;
    margin: 0;
  }
`;
