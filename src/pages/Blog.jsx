import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Accessibility from "../components/Accessibility";
import styles from "./styles/blog.module.scss";
const Blog = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // alert("La página todavía no está hecha, te pedimos una disculpas!");
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className={styles.container}>
      <Accessibility></Accessibility>

      <Navbar></Navbar>
      <header className={styles.main}>
        <h1>Blog</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum possimus quisquam vitae voluptatum tempora totam aut molestias quibusdam! Mollitia odio, architecto reprehenderit sapiente aspernatur dolorum voluptatum sit animi minima magor sit amet consectetur adipisicing elit. Harum possimus quisquam vitae voluptatum tempora totam aut molestias quibusdam! Mollitia odio, architecto reprehenderit sapiente aspernatur dolorum voluptatum sit animi minima magor sit amet consectetur adipisicing elit. Harum possimus quisquam vitae voluptatum tempora totam aut molestias quibusdam! Mollitia odio, architecto reprehenderit sapiente aspernatur dolorum voluptatum sit animi minima magni?</p>
      </header>
      <Footer></Footer>
    </main>
  );
};

export default Blog;
