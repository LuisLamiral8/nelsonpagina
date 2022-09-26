import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from "../pages/Contact";
import App from "../App";
import Blog from "../pages/Blog";
import News from "../pages/News";
import Cv from "../pages/Cv";
import "../styles/globals.scss";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/news" element={<News />} />
      <Route path="/cv" element={<Cv />} />
    </Routes>
  );
};
