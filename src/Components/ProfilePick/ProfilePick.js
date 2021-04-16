import "./ProfilePick.scss";
import Boy from "../../Assets/images/avatars/netflix-avatar.png";

const ProfilePick = (props) => {
  return (
    <div className="profile">
      <div className="profile-pick">
        <div className="profile-pick-container">
          <div className="profile-pick-title">Who's watching?</div>
          <ul className="profile-pick-list">
            <li className="profile-pick-list-item">
              <img src={Boy} alt="" className="profile-pick-list-item-avatar" />
              <h3 className="profile-pick-list-item-name">Gio</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePick;
