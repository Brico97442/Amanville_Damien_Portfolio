import React from "react";
import { Link } from "react-router-dom";
import "../styles/sass/sidemodal.scss";

function Sidemodal({ closeModal,isOpen }) {
  const handleCloseModal = () => {
    closeModal(); // Appeler la fonction closeModal de Header
  };
  const handleMouseLeave = () => {
    closeModal();
  };
  return (
    <aside className={`side-modal ${isOpen ? 'open' : 'close'}`} onMouseLeave={handleMouseLeave}>
          <Link className="side-modal-container-close-btn" onClick={handleCloseModal}>
            close
          </Link>
      <div className="side-modal-container ">
        <nav>
          <Link className="nav-link" to="/"  onClick={handleCloseModal}>
            ACCUEIL
          </Link>
          <Link className="nav-link" to="/Projects" onClick={handleCloseModal}>
            PROJETS
          </Link>
          <Link className="nav-link" to="/Projects" onClick={handleCloseModal}>
            A PROPOS
          </Link>
        </nav>
      </div>
    </aside>
  );
}
export default Sidemodal;
