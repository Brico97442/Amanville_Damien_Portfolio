import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/sass/cardmodal.scss";
import GithubItem from "./GithubItem";

function CardModal({ closeModal, content, link, linkText, icon, showNavLink,githubLink,linkSubtitle }) {
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
          <div className="button-wrapper">
            <GithubItem linkSubtitle={linkSubtitle} githubLink={githubLink}/>
            {showNavLink && (
              <NavLink to={link} target="_blank" className="nav-link">
                {linkText}
              </NavLink>
            )}
          </div>
          <button
            className="side-modal-container-close-btn"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={icon} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
