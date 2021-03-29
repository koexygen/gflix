import "./Features.scss";
import TV from "../../Assets/images/tv.png";
import mobileImg from "../../Assets/images/mobile-0819.jpg";
import devicePile from "../../Assets/images/device-pile.png";
import videoForTV from "../../Assets/videos/video-tv-0819.m4v";
import videoDevices from "../../Assets/videos/video-devices.m4v";

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
        videoSrc={videoForTV}
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
      <FeaturesItem
        title="Watch everywhere."
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        overlayImgSrc={devicePile}
        video
        videoSrc={videoDevices}
        videoNum={2}
      />
    </div>
  );
}

export default Features;
