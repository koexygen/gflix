import "./Card.scss";
import React, { useEffect, useState } from "react";

const Card = (props) => {
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
      className="card"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ background: "red" }}
    ></div>
  ) : (
    <div
      className="card"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    ></div>
  );
};

export default Card;