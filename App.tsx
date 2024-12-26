/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import { globalStyles, headerStyle, mainStyle } from "./src/styles/global";
import AppRoutes from "./src/routes";
import { useLocation } from "react-router-dom"; // Importação do hook

export default function App() {
  const location = useLocation(); // Obter a rota atual

  return (
    <>
      <Global styles={globalStyles} />
      {/* Renderiza o cabeçalho apenas se não estiver na página de login */}
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
