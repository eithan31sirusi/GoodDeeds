import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    line-height: 1.5;
  }

  ul, ol {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
  }
`;

export default GlobalStyle;
