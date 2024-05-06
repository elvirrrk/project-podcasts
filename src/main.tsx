import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/app/App.tsx";
import { ChakraProvider, theme } from "@chakra-ui/react";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
