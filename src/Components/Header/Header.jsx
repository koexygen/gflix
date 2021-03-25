import "./Header.scss";
import Navbar from "./Navbar";
import TryBanner from "./TryBanner";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <TryBanner />
    </div>
  );
}

export default Header;
