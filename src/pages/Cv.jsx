import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";
import styles from "./styles/cv.module.scss";
const Cv = () => {
  return (
    <main className="container">
      <Accessibility></Accessibility>

      <Navbar></Navbar>
      <Navbar></Navbar>
      <header className={styles.main}>
        <h1>Curriculum</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          possimus quisquam vitae voluptatum tempora totam aut molestias
          quibusdam! Mollitia odio, architecto reprehenderit sapiente aspernatur
          dolorum voluptatum sit animi minima magor sit amet consectetur
          adipisicing elit. Harum possimus quisquam vitae voluptatum tempora
          totam aut molestias quibusdam! Mollitia odio, architecto reprehenderit
          sapiente aspernatur dolorum voluptatum sit animi minima magor sit amet
          consectetur adipisicing elit. Harum possimus quisquam vitae voluptatum
          tempora totam aut molestias quibusdam! Mollitia odio, architecto
          reprehenderit sapiente aspernatur dolorum voluptatum sit animi minima
          magni?
        </p>
        <a href="#">Haz Click aquí!</a>
      </header>
      <Footer></Footer>
    </main>
  );
};

export default Cv;
