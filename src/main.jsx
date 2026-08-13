import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StateContextProvider from "./contexts/StateContextProvider.jsx";
import EntriesContextProvider from "./contexts/EntriesContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EntriesContextProvider>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </EntriesContextProvider>
  </StrictMode>,
);
