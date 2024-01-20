import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, p, ul, li, figure, figcaption, div {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
