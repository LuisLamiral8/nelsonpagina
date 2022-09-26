import React, { useEffect } from "react";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from './styles/news.module.scss'
const News = () => {
  return (
    <main className="container">
      <Accessibility></Accessibility>
      <Navbar></Navbar>
      <header className={styles.main}>
        <h1>Novedades</h1>
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
      </header>
      <Footer></Footer>
    </main>
  );
};

export default News;
