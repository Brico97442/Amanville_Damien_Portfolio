import React, { useState } from "react";
import CardModal from "./CardModal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Videocard({ content, title, websiteScreenshot, description, link, showNavLink,githubLink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card" onClick={openModal}>
      <div className="card-video">
        <h2>{title}</h2>
        <img src={websiteScreenshot} alt="illustration du site" />
        <div className="video-description">{description}</div>
        {isModalOpen && (
          <CardModal
            closeModal={closeModal}
            content={content}
            link={link}
            linkText="Visitez le site"
            icon={faTimes}
            showNavLink={showNavLink}
            githubLink={githubLink}
          />
        )}
      </div>
    </div>
  );
}

export default Videocard;
