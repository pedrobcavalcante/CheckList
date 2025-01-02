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

export const innerContainerStyle = css`
  display: flex;
  flex-direction: row;
  border-radius: 32px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 900px;
  height: 70%;
  max-height: 800px;
  min-width: 600px;
  overflow: hidden;
`;

export const imageSectionStyle = css`
  flex: 1;
  background-image: url("https://media.istockphoto.com/id/1144992154/vector/bokeh-background.jpg?s=612x612&w=0&k=20&c=8NEtcQyJlD8ImcE_R9bas16mYt1G-uvu58GvvuEF0Ss=");
  background-size: cover;
  background-position: center;
  transform: rotate(180deg);
  height: 100%;
`;

export const formSectionStyle = css`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100%;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
`;

export const titleStyle = css`
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: #0077cc;
  text-align: center;
`;

export const inputContainerStyle = css`
  width: 100%;
`;
