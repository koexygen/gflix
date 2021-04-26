import "./Navbar.scss";
import Logo from "../../Assets/images/gflix-logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../Actions";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";

export const Navbar = (props) => {
  return (
    <div className="header--navbar">
      <img src={Logo} alt="Gflix Logo" className="header--navbar-logo" />
      {props.loggedIn ? (
        <>
          <NavBarLeft />
          <NavBarRight />
        </>
      ) : (
        <Link to="/login" className="header--navbar-sign-in">
          Sign In
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
