import React, { useState } from "react";
import ReactPlayer from "react-player";
import CardModal from "./CardModal";

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
    <div className="card">
      <div className="card-video">
        <h2>{title}</h2>
        <ReactPlayer
          url={video}
          playing
          muted
          onStart={handleClick}
          height="100%"
          width="100%"
        />
        <div className="video-description" onClick={openModal}>
          {description}
        </div>
        {isModalOpen && <CardModal closeModal={closeModal} content={content} link={link}/>}
      </div>
    </div>
  );
}

export default Videocard;
