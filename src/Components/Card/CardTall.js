import React, { useState, useEffect } from "react";
import "./CardTall.scss";

const CardTall = (props) => {
  const [hover, setHover] = useState(false);

  const handleEnter = (e) => {
    setHover(true);
  };

  const handleLeave = (e) => {
    setHover(false);
  };

  useEffect(() => {
    console.log(hover);
  }, [hover]);

  return hover ? (
    <div
      className="card-tall"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ background: "red" }}
    ></div>
  ) : (
    <div
      className="card-tall"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    ></div>
  );
};

export default CardTall;
