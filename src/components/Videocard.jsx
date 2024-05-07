import React from "react";
import video from "../img/ohmyfoodminiature.mp4";

function VideoPlayer(event) {
  const handleMouseEnter = (event) => {
    event.target.play(); // Commencer la lecture de la vidéo lors du survol
  };

  const handleMouseLeave = (event) => {
    event.target.pause(); // Mettre en pause la vidéo lorsque le curseur quitte
  };

  return (
    <div className="video-card">
      <h2>"Oh my food"</h2>
      <video
        width="640"
        height="360"
         // Afficher les contrôles de lecture
        onMouseEnter={handleMouseEnter} // Démarrer la lecture automatique lors du survol
        onMouseLeave={handleMouseLeave}
         // Mettre en pause la lecture lorsque le curseur quitte
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
