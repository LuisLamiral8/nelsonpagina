import { useState } from "react";
import Accessibility from "./components/Accessibility";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from './styles/landing.module.scss';
function App() {
  return (
    <main className={styles.container}>
      <Accessibility></Accessibility>
      <Navbar></Navbar>
      <header className={styles.header}>
        <div className={styles.headerleft}>
          <h1>Museo de arte moderno</h1>
          <h3>Conoce más de nuestro museo deslizando para abajo</h3>
        </div>
        <div className={styles.headerright}>
          <img src="/assets/museum.svg" alt="" />
        </div>
      </header>
      <div className={styles.section0}>
        <ul>
          <li>
            <a href="#exposiciones">Exposiciones</a>
          </li>
          <li>
            <a href="#accesibilidad">Acccesibilidad</a>
          </li>
          <li>
            <a href="#educacion">Educacion</a>
          </li>
          <li>
            <a href="#coleccion">Coleccion</a>
          </li>
          <li>
            <a href="#museo">El museo</a>
          </li>
        </ul>
      </div>
      <section id="exposiciones" className={styles.exposiciones}>
        <div className={styles.exposicionesleft}>
          <h3>Exposiciones</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            officiis, incidunt ratione, aspernatur eos error ut perferendis
            corporis voluptates tempore dicta culpa vel dolorum accusamus
            dignissimos iste a praesentium voluptatibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            ducimus consectetur dolor est, animi suscipit at magni quibusdam
            voluptates. Maxime, sint minus odit tempore molestiae eos labore
            eligendi harum dignissimos?
          </p>
        </div>
        <div className={styles.exposicionesright}></div>
      </section>
      <section id="accesibilidad" className={styles.accesibilidad}>
        <div className={styles.accesibilidadleft}>
          <h3>Accesibilidad</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            officiis, incidunt ratione, aspernatur eos error ut perferendis
            corporis voluptates tempore dicta culpa vel dolorum accusamus
            dignissimos iste a praesentium voluptatibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            ducimus consectetur dolor est, animi suscipit at magni quibusdam
            voluptates. Maxime, sint minus odit tempore molestiae eos labore
            eligendi harum dignissimos?
          </p>
        </div>
        <div className={styles.accesibilidadright}></div>
      </section>
      <section id="educacion" className={styles.educacion}>
        <div className={styles.educacionleft}>
          <h3>Educacion</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            officiis, incidunt ratione, aspernatur eos error ut perferendis
            corporis voluptates tempore dicta culpa vel dolorum accusamus
            dignissimos iste a praesentium voluptatibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            ducimus consectetur dolor est, animi suscipit at magni quibusdam
            voluptates. Maxime, sint minus odit tempore molestiae eos labore
            eligendi harum dignissimos?
          </p>
        </div>
        <div className={styles.educacionright}></div>
      </section>
      <section id="coleccion" className={styles.coleccion}>
        <div className={styles.coleccionleft}>
          <h3>Coleccion</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            officiis, incidunt ratione, aspernatur eos error ut perferendis
            corporis voluptates tempore dicta culpa vel dolorum accusamus
            dignissimos iste a praesentium voluptatibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            ducimus consectetur dolor est, animi suscipit at magni quibusdam
            voluptates. Maxime, sint minus odit tempore molestiae eos labore
            eligendi harum dignissimos?
          </p>
        </div>
        <div className={styles.coleccionright}></div>
      </section>
      <section id="museo" className={styles.museo}>
        <div className={styles.museoleft}>
          <h3>El Museo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            officiis, incidunt ratione, aspernatur eos error ut perferendis
            corporis voluptates tempore dicta culpa vel dolorum accusamus
            dignissimos iste a praesentium voluptatibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            ducimus consectetur dolor est, animi suscipit at magni quibusdam
            voluptates. Maxime, sint minus odit tempore molestiae eos labore
            eligendi harum dignissimos?
          </p>
        </div>
        <div className={styles.museoright}></div>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default App;
