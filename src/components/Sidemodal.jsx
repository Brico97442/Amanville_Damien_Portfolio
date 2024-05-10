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
          <NavLink className="nav-link" to="/Projects" onClick={closeModal}>
            PROJETS
          </NavLink>
          <NavLink className="nav-link" to="/Skills" onClick={closeModal}>
            COMPETENCES
          </NavLink>
          <NavLink className="nav-link" to="/Contact" onClick={closeModal}>
            CONTACT
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}

export default Sidemodal;
