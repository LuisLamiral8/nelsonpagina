import React from "react";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./styles/contact.module.scss";
export const Contact = () => {
  const sendForm = () => {
    alert("Se ha enviado el formulario correctamente!");
    alert("Se te redirigirá al inicio.");
  };
  return (
    <main className={styles.container}>
      <Accessibility></Accessibility>
      <Navbar></Navbar>
      <header className={styles.contact}>
        <div className={styles.contact_main}>
          <h1>CONTACTO</h1>
        </div>
      </header>
      <section className={styles.contact_form}>
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
