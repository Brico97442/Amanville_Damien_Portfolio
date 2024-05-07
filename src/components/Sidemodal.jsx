import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "../styles/sass/sidemodal.scss";

function Sidemodal({ closeModal, isOpen }) {
  const handleCloseModal = () => {
    closeModal(); // Appeler la fonction closeModal de Header
  };
  const handleMouseLeave = () => {
    closeModal();
  };
  return (
    <aside
      className={`side-modal ${isOpen ? "open" : "close"}`}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="side-modal-container-close-btn"
        onClick={handleCloseModal}
      >
        <FontAwesomeIcon icon={faXmark} size="xl" />
      </button>
      <div className="side-modal-container ">
        <nav>
          <Link className="nav-link" to="/" onClick={handleCloseModal}>
            ACCUEIL
          </Link>
          <Link className="nav-link" to="/Projects" onClick={handleCloseModal}>
            PROJETS
          </Link>
          <Link className="nav-link" to="/Projects" onClick={handleCloseModal}>
            A PROPOS
          </Link>
          <Link className="nav-link" to="/Projects" onClick={handleCloseModal}>
            CONTACT
          </Link>
        </nav>
      </div>
    </aside>
  );
}
export default Sidemodal;
