import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components/macro";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
