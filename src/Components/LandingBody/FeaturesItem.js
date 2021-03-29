import "./FeaturesItem.scss";
import videoForTV from "../../Assets/videos/video-tv-0819.m4v";

function FeaturesItem(props) {
  return (
    <div className="features-item">
      <div
        className={`features-item--container-inside ${
          props.reverseIt ? "custom-reverse-direction" : null
        }`}
      >
        <div className="features-item--panel">
          <h1 className="features-item--panel-title">{props.title}</h1>
          <h2 className="features-item--panel-subtitle">{props.description}</h2>
        </div>

        <div className="features-item--panel">
          {props.video ? (
            <div
              className={
                props.customClass
                  ? "features-item--panel-img-video " + props.customClass
                  : "features-item--panel-img-video"
              }
            >
              <img
                src={props.overlayImgSrc}
                alt=""
                className="features-item--panel-img"
              />
              <video
                className="our-story-card-video"
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={videoForTV} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div
              className={
                props.customClass
                  ? "features-item--panel-img-video " + props.customClass
                  : "features-item--panel-img-video"
              }
            >
              <img
                src={props.overlayImgSrc}
                alt="img"
                className="features-item--panel-img"
              />

              {props.downloadLoader ? (
                <div className="stranger-animation">
                  <div className="stranger-animation-image">
                    <img
                      alt=""
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                    />
                  </div>
                  <div className="stranger-animation-text">
                    <div>Stranger Things</div>
                    <div>Downloading...</div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturesItem;
