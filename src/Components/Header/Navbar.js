import "./Navbar.scss";
import Logo from "../../Assets/images/gflix-logo.png";
import { connect } from "react-redux";
import { logout, changeProfile } from "../../Actions";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";

export const Navbar = (props) => {
  return (
    <div className="header--navbar">
      <img src={Logo} alt="Gflix Logo" className="header--navbar-logo" />
      {props.loggedIn ? <NavBarLeft /> : null}
      <NavBarRight
        logout={props.logout}
        changeProfile={props.changeProfile}
        loggedIn={props.loggedIn}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { logout, changeProfile })(Navbar);
