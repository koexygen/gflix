import React, { useState } from "react";
import "./CardTall.scss";
import Play from "../Play/Play";

const CardTall = ({ card }) => {
  const [hover, setHover] = useState(false);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => (
    <Play url={card.trailer} poster={card.poster} setPlaying={setPlaying} />
  );

  return (
    <>
      {playing ? playVideo() : null}
      <div
        className="card-tall"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={() => setPlaying(true)}
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
    </>
  );
};

export default CardTall;
