import "./NavBarLeft.scss";
import { Link } from "react-router-dom";

const NavBarLeft = () => {
  return (
    <ul className="navbar-left">
      <li className="navbar-left-item">
        <Link to="">Home</Link>
      </li>
      <li className="navbar-left-item">
        <Link to="">My List</Link>
      </li>
    </ul>
  );
};

export default NavBarLeft;
