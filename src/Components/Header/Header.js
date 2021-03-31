import "./Header.scss";
import TryBanner from "./TryBanner";

function Header({ children }) {
  console.log(children);
  return (
    <div className="header">
      <TryBanner />
      <div className="header--overlay"></div>
      {children}
    </div>
  );
}

export default Header;
