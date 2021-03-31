import "./Navbar.scss";
import Logo from "../../Assets/images/gflix-logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <div className="header--navbar">
    <Link to="/">
      <img src={Logo} alt="Gflix Logo" className="header--navbar-logo" />
    </Link>

    <Link to="/login" className="header--navbar-sign-in">
      Sign In
    </Link>
  </div>
);

export default Navbar;