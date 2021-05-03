import React, { useState } from "react";
import "./CardTall.scss";
import Play from "../Play/Play";
import { IconContext } from "react-icons";
import { BiPlusCircle, BiMinusCircle, AiFillPlayCircle } from "react-icons/all";
import { connect } from "react-redux";
import { addWatchListAction, removeWatchListAction } from "../../Actions";

const CardTall = ({ card, addWatchList, removeWatchList }) => {
  const [hover, setHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [inWatchList, setInWatchList] = useState(card.inWatchList);

  const playVideo = (e) => {
    return (
      <Play url={card.trailer} poster={card.poster} setPlaying={setPlaying} />
    );
  };

  const renderOverlay = (card) => {
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
              <AiFillPlayCircle
                onClick={(e) => {
                  playVideo(e);
                  setPlaying(true);
                }}
              />
            </div>
          </IconContext.Provider>
          {inWatchList ? (
            <IconContext.Provider
              value={{
                color: "white",
                className: "card-tall-overlay-icons-add-list",
              }}
            >
              <div>
                <BiMinusCircle
                  onClick={(e) => {
                    removeWatchList(card.id);
                    setInWatchList(false);
                  }}
                />
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
                <BiPlusCircle
                  onClick={(e) => {
                    addWatchList(card.id);
                    setInWatchList(true);
                  }}
                />
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

        {hover ? renderOverlay(card) : null}
      </div>
    </>
  );
};

export default connect(null, {
  addWatchList: addWatchListAction,
  removeWatchList: removeWatchListAction,
})(CardTall);
