import { useState } from "react";
import Accessibility from "./components/Accessibility";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main className="container">
      <Accessibility></Accessibility>
      <Navbar></Navbar>
      <header className="header">
        <div className="headerleft">
          <h1>Museo de arte moderno</h1>
          <h3>Conoce más de nuestro museo deslizando para abajo</h3>
        </div>
        <div className="headerright">
          <img src="/assets/museum.svg" alt="" />
        </div>
      </header>
      <div className="section0">
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
          <li>
            <a href="#agenda">Agenda</a>
          </li>
          <li>
            <a href="#entradas">Entradas</a>
          </li>
        </ul>
      </div>
      <section id="exposiciones" className="exposiciones">
        <div className="exposicionesleft">
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
        <div className="exposicionesright"></div>
      </section>
      <section id="accesibilidad"className="accesibilidad">
        <div className="accesibilidadleft">
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
        <div className="accesibilidadright"></div>
      </section>
      <section id="educacion" className="educacion">
        <div className="educacionleft">
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
        <div className="educacionright"></div>
      </section>
      <section id="coleccion" className="coleccion">
        <div className="coleccionleft">
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
        <div className="coleccionright"></div>
      </section>
      <section id="museo" className="museo">
        <div className="museoleft">
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
        <div className="museoright"></div>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default App;
