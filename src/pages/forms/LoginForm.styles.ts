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
  flex: 1;
  background-image: url("https://media.istockphoto.com/id/1144992154/vector/bokeh-background.jpg?s=612x612&w=0&k=20&c=8NEtcQyJlD8ImcE_R9bas16mYt1G-uvu58GvvuEF0Ss=");
  background-size: cover;
  background-position: center;
  background-color: transparent;
  transform: rotate(180deg);
  height: 100%;
`;

export const formSectionStyle = css`
  flex: 1;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100%;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const titleStyle = css`
  margin-bottom: 2rem;
  font-size: 3rem;
  color: #0077cc;
`;
export const inputStyle = css`
  max-width: 200px;
  min-width: 50px;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 32px;
  font-size: 1rem;
  background-color: #f0f0f0;
`;
export const buttonStyle = css`
  width: 100%;
  max-width: 200px;
  min-width: 50px;
  padding: 0.8rem 1.5rem;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 32px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #005fa3;
  }
`;
