import "./ProfilePick.scss";
import Boy from "../../Assets/images/avatars/netflix-avatar.png";

const ProfilePick = (props) => {
  return (
    <div className="profile-pick">
      <h1 className="profile-pick-title">Who's watching?</h1>
      <ul className="profile-pick-list">
        <li className="profile-pick-list-item">
          <img src={Boy} alt="" className="profile-pick-list-item-avatar" />
          <h3 className="profile-pick-list-item-name">Gio</h3>
        </li>
      </ul>
    </div>
  );
};

export default ProfilePick;
