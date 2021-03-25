import "./Navbar.scss";
import Logo from "../../Assets/images/logo.svg";

export const Navbar = () => (
  <div className="header--navbar">
    <img src={Logo} alt="Gflix Logo" className="header--navbar-logo" href="#" />
    <a href="#" className="header--navbar-sign-in">
      Sign In
    </a>
  </div>
);

export default Navbar;
