import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src="/assets/logo.webp" alt="" />
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/news">Novedades</Link>
        </li>
        <li>
          <Link to="/cv">Envianos tu curriculum!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
