import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "src/app/App.tsx";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { store } from "src/app/store/store.tsx";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
