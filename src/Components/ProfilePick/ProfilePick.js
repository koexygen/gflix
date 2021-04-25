import React, { useEffect, useState } from "react";
import "./ProfilePick.scss";
import LoadingGif from "../../Assets/images/loading.gif";

const ProfilePick = ({ profileImg }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <div className="profile">
      <div className="profile-pick">
        <div className="profile-pick-container">
          <div className="profile-pick-title">Who's watching?</div>
          <ul className="profile-pick-list">
            <li className="profile-pick-list-item">
              <img
                src={loading ? LoadingGif : profileImg}
                alt=""
                className="profile-pick-list-item-avatar"
              />
              <h3 className="profile-pick-list-item-name">Gio</h3>
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

export default ProfilePick;
