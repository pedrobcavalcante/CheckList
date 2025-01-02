/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  containerStyle,
  innerContainerStyle,
  imageSectionStyle,
  formSectionStyle,
  formStyle,
  titleStyle,
  inputContainerStyle,
} from "./LoginForm.styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

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
            <div css={inputContainerStyle}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div css={inputContainerStyle}>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
