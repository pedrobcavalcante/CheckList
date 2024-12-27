/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("https://cdn.pixabay.com/photo/2017/09/03/06/12/abstract-2709402_1280.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const inputStyle = css`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const buttonStyle = css`
  padding: 0.5rem;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`;
export const innerContainerStyle = css`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 70%;
  height: 70%;
  max-width: 900px;
  max-height: 1200px;
  min-width: 500px;
  min-height: 400px;
  overflow: hidden;
`;

export const imageSectionStyle = css`
  flex: 1; /* Garante que a imagem ocupa metade */
  background-image: url("https://media.istockphoto.com/id/1144992154/vector/bokeh-background.jpg?s=612x612&w=0&k=20&c=8NEtcQyJlD8ImcE_R9bas16mYt1G-uvu58GvvuEF0Ss=");
  background-size: cover;
  background-position: center;
  transform: rotate(180deg); /* Gira a imagem */
  height: 100%;
`;

export const formSectionStyle = css`
  flex: 1; /* Garante que o formulário ocupa a outra metade */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100%;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;
