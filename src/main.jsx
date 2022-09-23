import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  </React.StrictMode>
);
