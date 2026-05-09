import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

const redirect = sessionStorage.redirect;

delete sessionStorage.redirect;

if (redirect) {
  history.replaceState(null, "", redirect.split(location.origin)[1]);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
