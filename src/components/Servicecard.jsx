import React, { useState } from "react";
import CardModal from "./CardModal";

function Servicecard({ content, title, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("titi");
  };

  return (
    <div className="card"  onClick={openModal}>
      <div className="card-content">
        <h2>{title}</h2>
        <div className="card-content-wrapper">
          <p>{description}</p>
        </div>
        {isModalOpen && <CardModal closeModal={closeModal} content={content} linkText="Démarrer"/>}
      </div>
    </div>
  );
}

export default Servicecard;
