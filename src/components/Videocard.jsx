import React, { useRef } from "react";
import video from "../img/ohmyfoodminiature.mp4";

function VideoPlayer() {
  const videoRef = useRef(null);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-video" onMouseLeave={handleMouseLeave}>
        <h2>"Oh my food"</h2>
        <video
          width="400"
          height="300"
          ref={videoRef}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoPlayer;
