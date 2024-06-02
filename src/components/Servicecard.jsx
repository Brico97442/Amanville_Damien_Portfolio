import React, { useState } from "react";
import CardModal from "./CardModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function Servicecard({ content, title, description, icon, imageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div
        className="card-content"
        onMouseEnter={openModal}
        onMouseLeave={closeModal}
      >
        <h2>{title}</h2>
        <div className="card-content-wrapper">
          <p>{description}</p>
          <FontAwesomeIcon icon={icon} size="xl" />
        </div>
        <img src={imageUrl} alt="illustration de la card" loading="lazy"/>
        {isModalOpen && (
          <CardModal
            closeModal={closeModal}
            content={content}
            link="/contact"
            showNavLink="true"
            linkText="Me contacter"
            icon={faTimes}
          />
        )}
      </div>
    </div>
  );
}

export default Servicecard;
