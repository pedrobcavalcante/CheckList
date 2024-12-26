import { css } from "@emotion/react";

export const headerStyle = css`
  width: 100%;
  background-color: #0077cc;
  color: #ffffff;
  text-align: center;
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  h1 {
    color: #ffffff; /* Garante que o texto seja branco */
  }
`;

export const mainStyle = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px); /* Altura total da viewport menos o cabeçalho */
  background-color: #f5f5f5;
`;

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
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
