import React, { useState } from "react";
import CardModal from "./CardModal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import IconItems from "./IconItems";

function Videocard({ content, title, websiteScreenshot, description, link, showNavLink,githubLink,linkSubtitle,iconUrls }) {
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
        <img src={websiteScreenshot} alt="illustration du site" loading="lazy"/>
        <div className="video-description">{description}</div>
        <IconItems iconUrls={iconUrls}/>
        {isModalOpen && (
          <CardModal
            closeModal={closeModal}
            content={content}
            link={link}
            linkText="Visitez le site"
            icon={faTimes}
            showNavLink={showNavLink}
            githubLink={githubLink}
            linkSubtitle={linkSubtitle}
          />
        )}
      </div>
    </div>
  );
}

export default Videocard;
