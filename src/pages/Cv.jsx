import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";
const Cv = () => {
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
        <div className="headerleft">hello from Cv</div>
      </header>
      <Footer></Footer>
    </main>
  );
};

export default Cv;