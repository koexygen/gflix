import React, { useEffect, useState } from "react";
import "./CardTall.scss";

const CardTall = ({ card }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card-tall"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="card-tall-content">
        <div className="card-tall-content-img">
          {hover ? (
            <video
              src={card.trailer}
              muted={true}
              autoPlay
              loop
              preload="true"
            />
          ) : (
            <img src={card.poster} alt={card.title} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTall;
