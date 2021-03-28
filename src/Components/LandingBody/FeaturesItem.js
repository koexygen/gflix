import "./FeaturesItem.scss";
import TV from "../../Assets/images/tv.png";

function FeaturesItem() {
  return (
    <div className="features-item">
      <div className="features-item--container-inside">
        <div className="features-item--panel">
          <h1 className="features-item--panel-title">Enjoy on your TV.</h1>
          <h2 className="features-item--panel-subtitle">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>

        <div className="features-item--panel">
          <img src={TV} alt="" className="features-item--panel-img" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesItem;
