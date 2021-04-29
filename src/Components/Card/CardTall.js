import React, { useState, useEffect } from "react";
import "./CardTall.scss";

const CardTall = ({ card }) => {
  const [hover, setHover] = useState(false);

  const handleEnter = (e) => {
    setHover(true);
    let event = e;

    setTimeout(() => {
      // debugger;
      // event.target.play();
    }, 500);
  };

  const handleLeave = (e) => {
    setHover(false);
    let event = e;

    setTimeout(() => {
      // event.target.pause();
    }, 500);
  };

  useEffect(() => {
    console.log(hover);
  }, [hover]);

  return hover ? (
    <div
      className="card-tall"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ transform: "scale(1.2)" }}
    >
      <div className="card-tall-content">
        {/*<div className="card-tall-content-img">*/}
        {/*  <img src={card.poster} alt={card.title} />*/}
        {/*</div>*/}
        <div className="card-tall-content-video">
          <video
            autoPlay
            poster={card.poster}
            src={card.trailerUrl}
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
          />
        </div>
      </div>
    </div>
  ) : (
    <div
      className="card-tall"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="card-tall-content">
        <div className="card-tall-content-img">
          <img src={card.poster} alt={card.title} />
        </div>
      </div>
    </div>
  );
};

export default CardTall;
