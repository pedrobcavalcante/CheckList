/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  containerStyle,
  innerContainerStyle,
  imageSectionStyle,
  formSectionStyle,
  formStyle,
  inputStyle,
  buttonStyle,
  titleStyle,
} from "./LoginForm.styles";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div css={containerStyle}>
      <div css={innerContainerStyle}>
        <div css={imageSectionStyle}></div>
        <div css={formSectionStyle}>
          <form onSubmit={handleLogin} css={formStyle}>
            <h1 css={titleStyle}>Login</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              css={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              css={inputStyle}
            />
            <button type="submit" css={buttonStyle}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
