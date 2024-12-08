import { css } from "@emotion/react";

export const containerStyle = css`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const inputContainerStyle = css`
  display: flex;
  gap: 0.5rem;
`;

export const inputStyle = css`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const addButtonStyle = css`
  padding: 0.5rem 1rem;
  background-color: #0077cc;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  &:hover {
    background-color: #005fa3;
  }
`;

export const listStyle = css`
  margin-top: 1rem;
  list-style: none;
`;

export const taskStyle = (completed: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background: ${completed ? "#e6ffe6" : "#f9f9f9"};
  border-bottom: 1px solid #ddd;
  span {
    text-decoration: ${completed ? "line-through" : "none"};
  }
`;

export const deleteButtonStyle = css`
  padding: 0.25rem 0.5rem;
  background-color: #ff6f61;
  color: white;
  font-size: 0.9rem;
  border-radius: 4px;
  &:hover {
    background-color: #d9534f;
  }
`;
