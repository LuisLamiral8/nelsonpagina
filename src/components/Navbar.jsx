import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.scss";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className={styles.nav}>
      {clicked && (
        <div className={styles.responsiveContainer}>
          <ul>
            <li>
              <Link to="/" onClick={onClick} >Inicio</Link>
            </li>
            <li>
              <Link to="/blog" onClick={onClick} >Blog</Link>
            </li>
            <li>
              <Link to="/contact" onClick={onClick} >Contacto</Link>
            </li>
            <li>
              <Link to="/news" onClick={onClick} >Novedades</Link>
            </li>
            <li>
              <Link to="/cv" onClick={onClick} >Envianos tu curriculum!</Link>
            </li>
          </ul>
        </div>
      )}
      <img className={styles.logo} src="/assets/logo.png" alt="" />
      <ul className={styles.navUl}> 
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
      <button onClick={onClick} className={styles.ham}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.17em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 28 24"
        >
          <path d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
