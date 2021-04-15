import "./Navbar.scss";
import Logo from "../../Assets/images/gflix-logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../Actions";

export const Navbar = (props) => {
  return (
    <div className="header--navbar">
      <Link to="/">
        <img src={Logo} alt="Gflix Logo" className="header--navbar-logo" />
      </Link>

      {props.loggedIn ? (
        <button
          className="header--navbar-sign-in"
          onClick={() => {
            props.logout(localStorage.getItem("x-SessionID"));
          }}
        >
          Logout
        </button>
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
