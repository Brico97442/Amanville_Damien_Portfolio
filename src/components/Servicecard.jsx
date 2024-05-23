import React, { useState } from "react";
import CardModal from "./CardModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Servicecard({ content, title, description,icon,link,imageUrl}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("titi");
  };

  return (
    <div className="card"  >
      <div className="card-content" onMouseEnter={openModal} onMouseLeave={closeModal}>
        <h2>{title}</h2>
        <div className="card-content-wrapper">
          <p>{description}</p>
          <FontAwesomeIcon icon={icon} size="xl"/>
        </div>
        <img src={imageUrl} alt="illustration de la card"/>
        {isModalOpen && <CardModal closeModal={closeModal} content={content} linkText="Me contacter" link={link} />}
      </div>
    </div>
  );
}

export default Servicecard;
