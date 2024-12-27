/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  width: 100%;
  padding: 0.8rem;
  background-color: #0077cc;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005fa3;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button css={buttonStyle} {...props}>
      {children}
    </button>
  );
}
