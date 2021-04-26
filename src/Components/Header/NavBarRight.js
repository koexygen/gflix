import React from "react";
import "./NavBarRight.scss";
import Boy from "../../Assets/images/avatars/netflix-avatar.png";
import { Link } from "react-router-dom";

const NavBarRight = (props) => {
  return (
    <div className="navbar-right">
      {props.loggedIn ? (
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
                <li
                  className="navbar-right-profile-sub-dropdown-profiles-item"
                  onClick={props.changeProfile}
                >
                  <Link to="">Manage Profiles</Link>
                </li>
              </ul>
              <ul className="navbar-right-profile-sub-dropdown-menu">
                <li
                  className="navbar-right-profile-sub-dropdown-menu-item"
                  onClick={props.logout}
                >
                  <Link to="">Sign out of Gflix</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/login" className="header--navbar-sign-in">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default NavBarRight;
