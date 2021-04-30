import "./Play.scss";
import { IoIosCloseCircleOutline } from "react-icons/all";
import { IconContext } from "react-icons";
import React from "react";

const Play = (props) => {
  return (
    <div className="play">
      <div className="play-container">
        <IconContext.Provider
          value={{
            color: "white",
            className: "play-container-icon-close",
          }}
        >
          <IoIosCloseCircleOutline onClick={() => props.setPlaying(false)} />
        </IconContext.Provider>
        <video id="video-element" controls autoPlay={true}>
          <source src={props.url} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Play;
