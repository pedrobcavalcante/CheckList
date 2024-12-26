/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import { globalStyles, headerStyle, mainStyle } from "./src/styles/global";
import AppRoutes from "./src/routes";

export default function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <header css={headerStyle}>
        <h1>My Checklist</h1>
      </header>
      <main css={mainStyle}>
        <AppRoutes />
      </main>
    </>
  );
}