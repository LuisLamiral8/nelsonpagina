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
          <button onClick={activeModal}>X</button>
          <ul>
            <li>
              <a href="">
                Agrandar Fuentes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.13em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 576 512"
                >
                  <path d="M304 32H16A16 16 0 0 0 0 48v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h56v304H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h56v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm256 336h-48V144h48c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 0 0-22.62 0l-80 80C379.36 126 384.36 144 400 144h48v224h-48c-14.31 0-21.32 17.31-11.31 27.31l80 80a16 16 0 0 0 22.62 0l80-80C580.64 386 575.64 368 560 368z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                Realzar Enlaces
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                Altura de la linea
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 19H5l.007-7H7v5h5v2Zm6.992-7H17V7h-5V5h7l-.008 7Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                Alinear texto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 48 48"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m16 35l-6 6l-6-6m12-22l-6-6l-6 6m6-6v34M44 9H22m14 10H22m22 10H22m14 10H22"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <button onClick={activeModal} className="activebtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default Accessibility;
