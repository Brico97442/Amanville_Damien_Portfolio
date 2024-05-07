import React, { useRef } from "react";

function VideoPlayer({title,video,description}) {
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
        <h2>{title}</h2>
        <video
          width="400"
          height="200"
          ref={videoRef}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-description">
          {description}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
