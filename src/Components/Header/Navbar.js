import "./Navbar.scss";
import Logo from "../../Assets/images/gflix-logo.png";
import { connect } from "react-redux";
import { logout, changeProfile } from "../../Actions";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <div className="header--navbar">
      <Link style={{ width: "auto" }} to={props.loggedIn ? "/browse" : "/"}>
        <img src={Logo} alt="Gflix Logo" className="header--navbar-logo" />
      </Link>
      {props.loggedIn ? <NavBarLeft /> : null}
      <NavBarRight
        logout={props.logout}
        changeProfile={props.changeProfile}
        loggedIn={props.loggedIn}
        user={props.user}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
    user: state.user,
  };
};

export default connect(mapStateToProps, { logout, changeProfile })(Navbar);
