import {extendTheme , ChakraProvider } from "@chakra-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

// 3. extend the theme
const customTheme = extendTheme({ config })


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
