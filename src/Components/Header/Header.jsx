import "./Header.scss";
import TryBanner from "./TryBanner";

function Header() {
  return (
    <div className="header">
      <TryBanner />
      <div className="header--overlay"></div>
    </div>
  );
}

export default Header;
