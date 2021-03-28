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
          <div className="features-item--panel-img-video">
            <img src={TV} alt="" className="features-item--panel-img" />
            <video
              className="our-story-card-video"
              autoPlay
              playsInline
              muted
              loop
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesItem;
