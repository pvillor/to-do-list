import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: lightgray;
    color: black;
  }

  body, input, button {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decorattion: none;
  }
`