"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: "myriad-pro", sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 1.15;
    background-color: #000;
    color: #fff;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  ul {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration-skip-ink: none;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
