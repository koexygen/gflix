import "./NavBarRight.scss";
import Boy from "../../Assets/images/avatars/netflix-avatar.png";

const NavBarRight = (props) => {
  return (
    <div className="navbar-right">
      <div className="navbar-right-element">
        <div className="navbar-right-profile">
          <div className="navbar-right-profile-dropdown">
            <span className="navbar-right-profile-dropdown-picture">
              <img src={Boy} alt="profile" />
            </span>
            <span className="navbar-right-profile-dropdown-caret" />
          </div>
          <div className="navbar-right-profile-sub-dropdown">
            <ul className="navbar-right-profile-sub-dropdown-profiles">
              <li className="navbar-right-profile-sub-dropdown-profiles-item">
                <div>
                  <img src={Boy} alt="profile" />
                  <span>Gio</span>
                </div>
              </li>
            </ul>
            <ul className="navbar-right-profile-sub-dropdown-menu">
              <li className="navbar-right-profile-sub-dropdown-menu-item">
                Item 1
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarRight;
