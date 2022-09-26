import React from "react";
import styles from './styles/footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_clip}></div>
      <h5>Museo de arte</h5>
      <p>Creado por:</p>
      <p>Matias N. Galán, Ezequiel Minetto, Luis F. Lamiral B.</p>
      <p>Desarrollado por:</p>
      <p>Luis F Lamiral B.</p>
    </footer>
  );
};

export default Footer;
