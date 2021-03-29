import "./Features.scss";
import TV from "../../Assets/images/tv.png";
import mobileImg from "../../Assets/images/mobile-0819.jpg";
import FeaturesItem from "./FeaturesItem";

function Features() {
  return (
    <div className="features">
      <FeaturesItem
        title="Enjoy on your TV."
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more."
        overlayImgSrc={TV}
        video
      />
      <FeaturesItem
        title="Download your shows to watch offline."
        description="Save your favorites easily and always have something to watch."
        direction="row-reverse"
        overlayImgSrc={mobileImg}
        customClass="mobile-part"
        downloadLoader
        reverseIt
      />
    </div>
  );
}

export default Features;
