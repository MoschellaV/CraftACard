import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>
);
