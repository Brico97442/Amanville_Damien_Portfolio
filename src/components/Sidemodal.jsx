// Sidemodal.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/sass/sidemodal.scss";

function Sidemodal({ isOpen, closeModal }) {
  return (
    <aside className={`side-modal ${isOpen ? "open" : "close"}`}>
      <button className="side-modal-container-close-btn" onClick={closeModal}>
        <FontAwesomeIcon icon={faXmark} size="xl" />
      </button>
      <div className="side-modal-container">
        <nav>
          <NavLink className="nav-link" to="/" onClick={closeModal}>
            ACCUEIL
          </NavLink>
          <a className="nav-link" href="#projects" onClick={closeModal}>
            PROJETS
          </a>
          <NavLink className="nav-link" to="/Contact" onClick={closeModal}>
            CONTACT
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}

export default Sidemodal;
