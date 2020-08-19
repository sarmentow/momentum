import "./assets/css/fonts.css";
import "./tailwind.css";
import "./assets/css/extra.css";
import { GlobalProvider } from "./context/GlobalState";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
