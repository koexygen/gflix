import "./Accordion.scss";
import React, { useState } from "react";
import AddIcon from "../../Assets/images/add.png";
import CloseIcon from "../../Assets/images/close-slim.png";

function Accordion(props) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <div className="accordion">
      <div
        className="accordion-header"
        onClick={() => setToggleShow(!toggleShow)}
      >
        {props.header}
        {toggleShow ? (
          <img src={AddIcon} alt="Open" />
        ) : (
          <img src={CloseIcon} alt="Close" />
        )}
      </div>
      <div
        className={toggleShow ? "accordion-body open" : "accordion-body closed"}
      >
        <span>{props.body}</span>
      </div>
    </div>
  );
}

export default Accordion;
