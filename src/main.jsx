import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ToDoProv from "./store/todocontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToDoProv>
    <App />
  </ToDoProv>
);
