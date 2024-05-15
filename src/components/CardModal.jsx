import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Utilisation de faTimes au lieu de faXmark pour l'icône de fermeture
import "../styles/sass/cardmodal.scss";

function CardModal({ closeModal, content, link, linkText }) {
  const handleClose = (event) => {
    event.stopPropagation(); // Empêche la propagation de l'événement de clic à l'élément parent
    closeModal();
  };

  return (
    <div className="card-modal active" onClick={closeModal}>
      <div className="card-modal-wrapper">
        <div
          className="card-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <p>{content}</p>
          <NavLink to={link} target="blank" className="nav-link">
            {linkText}
          </NavLink>
          <button
            className="side-modal-container-close-btn"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimes} size="xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
