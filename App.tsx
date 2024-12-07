/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import { globalStyles } from "./src/styles/global";
import AppRoutes from "./src/routes";

export default function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <AppRoutes />
    </>
  );
}