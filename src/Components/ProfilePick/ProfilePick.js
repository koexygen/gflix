import React, { useEffect, useState } from "react";
import "./ProfilePick.scss";
import LoadingGif from "../../Assets/images/loading.gif";
import { connect } from "react-redux";
import { pickProfile } from "../../Actions";

const ProfilePick = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="profile">
      <div className="profile-pick">
        <div className="profile-pick-container">
          <div className="profile-pick-title">Who's watching?</div>
          <ul className="profile-pick-list">
            <li
              className="profile-pick-list-item"
              onClick={() => {
                props.pickProfile(props.username);
              }}
            >
              <img
                src={loading ? LoadingGif : props.profileImg}
                alt=""
                className="profile-pick-list-item-avatar"
              />
              <h3 className="profile-pick-list-item-name">
                {capitalize(props.username)}
              </h3>
            </li>
          </ul>

          <div className="profile-pick-container-manage-profile">
            manage profiles
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { pickProfile })(ProfilePick);
