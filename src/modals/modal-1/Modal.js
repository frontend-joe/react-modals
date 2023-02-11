import { useState } from "react";
import "./Modal.css";

const Navbar = ({ setIsOpen }) => (
  <nav className="navbar">
    <button className="material-symbols-outlined">home</button>
    <button className="material-symbols-outlined">settings</button>
    <button className="material-symbols-outlined">build</button>
    <button
      onClick={() => setIsOpen(true)}
      className="material-symbols-outlined"
    >
      more_vert
    </button>
  </nav>
);

const Overlay = ({ isOpen, setIsOpen }) => (
  <div
    onClick={() => setIsOpen(false)}
    className={`overlay ${isOpen ? "open" : ""}`}
  />
);

const Modal = ({ isOpen }) => (
  <div className={`modal ${isOpen ? "open" : ""}`}>
    <h2>Side modal</h2>
    <p>I am some text inside.</p>
  </div>
);

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
      <Modal isOpen={isOpen} />
    </>
  );
};
