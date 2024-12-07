import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  h1 {
    font-size: 2rem;
    color: #0077cc;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;
