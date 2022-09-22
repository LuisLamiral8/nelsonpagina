import React from "react";
import { useState } from "react";

const Accessibility = () => {
  const [modal, setModal] = useState(false);
  const activeModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal ? (
        <div className="modal">
            <button onClick={activeModal} >X</button>
            <ul>
                <li><a href="">Agrandar Fuentes</a></li>
                <li><a href="">Realzar Enlaces</a></li>
                <li><a href="">Altura de la linea</a></li>
                <li><a href="">Alinear texto</a></li>
            </ul>
        </div>
      ) : (
        <button onClick={activeModal} className="activebtn">
          {">"}
        </button>
      )}
    </>
  );
};

export default Accessibility;
