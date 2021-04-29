import React, { useState } from "react";
import "./CardTall.scss";

const CardTall = ({ card }) => {
  const [hover, setHover] = useState(false);
  let videoTimeOut;

  const handleEnter = (e) => {
    setHover(true);

    videoTimeOut = setTimeout(() => {
      if (hover) e.target.play();
    }, 700);
  };

  const handleLeave = (e) => {
    clearTimeout(videoTimeOut);
    setHover(false);
    e.target.load();
  };

  return (
    <div
      className="card-tall"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="card-tall-content">
        <div className="card-tall-content-video">
          <video
            poster={card.poster}
            src={card.trailer}
            onMouseOver={handleEnter}
            onMouseOut={handleLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default CardTall;
