import React, { useState } from "react";
import ReactPlayer from "react-player";
import CardModal from "./CardModal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function Videocard({ content, title, video, description,link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("titi");
  };

  const handleClick = () => {};

  return (
    <div className="card" onClick={openModal}>
      <div className="card-video">
        <h2>{title}</h2>
        <ReactPlayer
          url={video}
          playing
          onStart={handleClick}
          height="100%"
          width="100%"
        />
        <div className="video-description">
          {description}
        </div>
        {isModalOpen && <CardModal closeModal={closeModal} content={content} link={link} linkText="Visitez le site" icon={faTimes}/>}
      </div>
    </div>
  );
}

export default Videocard;
