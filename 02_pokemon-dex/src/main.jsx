import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CollectedPokemonProvider } from "./context/CollectedPokemonContext.jsx";

createRoot(document.getElementById("root")).render(
  <CollectedPokemonProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CollectedPokemonProvider>
);
