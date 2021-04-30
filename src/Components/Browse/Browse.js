import React, { useEffect, useState } from "react";
import "./Browse.scss";
import ProfilePick from "../ProfilePick/ProfilePick";
import { connect } from "react-redux";
import Loading from "../extras/Loading";
import { pickProfile, getAllContent } from "../../Actions";
import Section from "../Section/Section";
import Boy from "../../Assets/images/avatars/netflix-avatar.png";
import dotaCover from "../../Assets/images/dota.png";
import dotaText from "../../Assets/images/dota-text.png";
import { VscMute, VscUnmute } from "react-icons/all";
import { IconContext } from "react-icons";

function Browse(props) {
  const [loading, setLoading] = useState(true);
  const [playCoverVideo, setPlayCoverVideo] = useState(false);
  const [coverPlayed, setCoverPlayed] = useState(false);
  const [coverMuted, setCoverMuted] = useState(false);

  useEffect(() => {
    const getAllContent = props.getAllContent;
    getAllContent();
  }, [props.user.loggedIn, props.getAllContent]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [props.user.pickedProfile]);

  const renderHeaderVideo = () => {
    return (
      <div>
        <video
          className="browse--header-cover-video"
          poster={dotaCover}
          src="https://hoovieslibs.b-cdn.net/gflix/dota-trailer.mp4"
          muted={coverMuted}
          preload="true"
          loop
          autoPlay
        />
        <IconContext.Provider
          value={{
            color: "white",
            className: "browse--header-icon-speaker",
          }}
        >
          {coverMuted ? (
            <VscMute onClick={() => setCoverMuted(!coverMuted)} />
          ) : (
            <VscUnmute onClick={() => setCoverMuted(!coverMuted)} />
          )}
        </IconContext.Provider>
      </div>
    );
  };

  return props.user.pickedProfile ? (
    <>
      {loading ? <Loading profileImg={Boy} loading={loading} /> : null}
      <div
        className="browse"
        onMouseOver={() => {
          if (!coverPlayed)
            setTimeout(function () {
              setCoverPlayed(true);
              setPlayCoverVideo(true);
            }, 2000);
        }}
      >
        <div className="browse--header">
          <img
            src={dotaCover}
            alt="dota"
            className="browse--header-cover-img"
          />
          {playCoverVideo ? renderHeaderVideo() : null}
          <div className="browse--header-feature">
            <div className="browse--header-feature-poster">
              <img src={dotaText} alt="dota info" />
            </div>
            <p className="browse--header-feature-title">
              A hero with a beastly side. A princess on a quest. A world on the
              brink. Dragons are real, but all is not as it seems.
            </p>
            <button
              className="browse--header-feature-play"
              onClick={() => setPlayCoverVideo(!playCoverVideo)}
            >
              <div className="browse--header-feature-play-svg">
                <svg viewBox="0 0 24 24">
                  <path d="M6 4l15 8-15 8z" fill="currentColor" />
                </svg>
              </div>
              <span className="browse--header-feature-play-text">
                Play/Pause
              </span>
            </button>
          </div>
          <div className="browse--header-shadows" />
        </div>

        <Section tall allContent={props.allContent} />
      </div>
    </>
  ) : (
    <ProfilePick
      profileImg={Boy}
      username={props.user.username}
      pickProfile={props.pickProfile}
      setLoading={setLoading}
    />
  );
}

const mapStateToProps = (state) => {
  return { user: state.user, allContent: state.content.allContent };
};

export default connect(mapStateToProps, {
  pickProfile,
  getAllContent,
})(Browse);
