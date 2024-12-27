/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const inputStyle = css`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 32px;
  font-size: 1rem;
  background-color: #f9f9f9;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
    border-color: #0077cc;
    box-shadow: 0 0 4px rgba(0, 119, 204, 0.5);
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return <input css={inputStyle} {...props} />;
}
