import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ title,video,description}) {

  const handleClick = () => {
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-video" >
        <h2>{title}</h2>
        <ReactPlayer url={video}/>
        <div className="video-description">{description}</div>
      </div>
    </div>
  );
}

export default VideoPlayer;
