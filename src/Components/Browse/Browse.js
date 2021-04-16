import React from "react";
import "./Browse.scss";
import ProfilePick from "../ProfilePick/ProfilePick";

function Browse(props) {
  return (
    <div className="browse">
      <h1>hi from Browse Page</h1>
      <ProfilePick />
    </div>
  );
}

export default Browse;
