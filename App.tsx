/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import { globalStyles, headerStyle, mainStyle } from "./src/styles/global";
import AppRoutes from "./src/routes";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Global styles={globalStyles} />
      { }
      {location.pathname !== "/" && (
        <header css={headerStyle}>
          <h1>My Checklist</h1>
        </header>
      )}
      <main css={mainStyle}>
        <AppRoutes />
      </main>
    </>
  );
}
