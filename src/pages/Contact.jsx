import React from "react";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../globals.scss";
export const Contact = () => {
  const sendForm = () => {
    alert("Se ha enviado el formulario correctamente!");
    alert("Se te redirigirá al inicio.");
  };
  return (

    <main className="container">
      <Accessibility></Accessibility>
      <Navbar></Navbar>
      <header className="contact">
        <div className="contact_main">
          <h1>CONTACTO</h1>
        </div>
      </header>
      <section className="contact_form">
        <form action="/">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="number" placeholder="DNI" />
          <input type="text" placeholder="Mensaje" />
          <input onClick={sendForm} type="submit" value="ENVIAR" />
        </form>
      </section>
      <Footer></Footer>
    </main>
  );
};
