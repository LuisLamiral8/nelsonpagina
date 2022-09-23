import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Accessibility from "../components/Accessibility";

const Blog = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      alert("La página todavía no está hecha, te pedimos una disculpas!");
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="container">
      <Accessibility></Accessibility>

      <Navbar></Navbar>
      <header className="header">
        <div className="headerleft">hello from Blog</div>
      </header>
      <Footer></Footer>
    </main>
  );
};

export default Blog;
