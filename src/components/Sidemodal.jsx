import React from "react";
import { Link } from "react-router-dom";
import "../styles/sass/sidemodal.scss";

function Sidemodal({ closeModal }) {
  const handleCloseModal = () => {
    closeModal(); // Appeler la fonction closeModal de Header
  };

  return (
    <section className="side-modal open"> {/* Ajout de la classe "open" pour ouvrir le modal */}
      <div className="side-modal-container">
        <nav>
          <Link className="nav-link" to="/">
            ACCUEIL
          </Link>
          <Link className="nav-link" to="/Projects">
            PROJETS
          </Link>
          <Link className="nav-link" to="/Projects">
            A PROPOS
          </Link>
          <Link className="nav-link" to="/Contact" onClick={handleCloseModal}>
            close
          </Link>
        </nav>
      </div>
    </section>
  );
}
export default Sidemodal;
