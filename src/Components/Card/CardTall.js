import React, { useState } from "react";
import "./CardTall.scss";
import Play from "../Play/Play";
import { IconContext } from "react-icons";
import { BiPlusCircle, BiMinusCircle, AiFillPlayCircle } from "react-icons/all";

const CardTall = ({ card }) => {
  const [hover, setHover] = useState(false);
  const [playing, setPlaying] = useState(false);

  const playVideo = (e) => {
    return (
      <Play url={card.trailer} poster={card.poster} setPlaying={setPlaying} />
    );
  };

  const renderOverlay = () => {
    return (
      <div className="card-tall-overlay">
        <div className="card-tall-overlay-icons">
          <IconContext.Provider
            value={{
              color: "white",
              className: "card-tall-overlay-icons-play",
            }}
          >
            <div>
              <AiFillPlayCircle />
            </div>
          </IconContext.Provider>
          {card.inWatchlist ? (
            <IconContext.Provider
              value={{
                color: "white",
                className: "card-tall-overlay-icons-add-list",
              }}
            >
              <div>
                <BiMinusCircle />
              </div>
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{
                color: "white",
                className: "card-tall-overlay-icons-add-list",
              }}
            >
              <div>
                <BiPlusCircle />
              </div>
            </IconContext.Provider>
          )}
        </div>
        <h1 className="card-tall-overlay-title">{card.title}</h1>
      </div>
    );
  };

  return (
    <>
      {playing ? playVideo() : null}
      <div
        className="card-tall"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={(e) => {
          playVideo(e);
          setPlaying(true);
        }}
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

        {hover ? renderOverlay() : null}
      </div>
    </>
  );
};

export default CardTall;
