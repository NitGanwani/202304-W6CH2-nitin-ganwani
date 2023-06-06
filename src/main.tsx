import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { PhoneContextProvider } from "./context/phone.context.provider";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <PhoneContextProvider>
        <App />
      </PhoneContextProvider>
    </Router>
  </React.StrictMode>
);
