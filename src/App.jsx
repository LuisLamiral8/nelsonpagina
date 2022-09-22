import { useState } from "react";
import Accessibility from "./components/Accessibility";

function App() {
  return (
    <main className="container">
      <Accessibility></Accessibility>
      <nav>
        <img className="logo" src="/assets/logo.webp" alt="" />
        <ul>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Novedades</a>
          </li>
          <li>
            <a href="#">Envianos tu curriculum!</a>
          </li>
        </ul>
      </nav>
      <header className="header">
        <div className="headerleft">
          <h1>Museo de arte moderno</h1>
          <h3>Conoce más de nuestro museo deslizando para abajo</h3>
        </div>
        <div className="headerright">
          <img src="/assets/Designer _Outline.svg" alt="" />
        </div>
      </header>
      <div className="section0">
        <ul>
          <li>
            <a href="#">Exposiciones</a>
          </li>
          <li>
            <a href="#">Acccesibilidad</a>
          </li>
          <li>
            <a href="#">Educacion</a>
          </li>
          <li>
            <a href="#">Coleccion</a>
          </li>
          <li>
            <a href="#">El museo</a>
          </li>
          <li>
            <a href="#">Agenda</a>
          </li>
          <li>
            <a href="#">Entradas</a>
          </li>
        </ul>
      </div>
      <section className="section">
        <div className="section1left">
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
        <div className="section1right"></div>
      </section>
      <section className="section">
        <div className="section1left">
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
        <div className="section1right"></div>
      </section>
    </main>
  );
}

export default App;
