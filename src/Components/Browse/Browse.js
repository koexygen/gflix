import React, { useEffect, useState } from "react";
import "./Browse.scss";
import ProfilePick from "../ProfilePick/ProfilePick";
import { connect } from "react-redux";
import Loading from "../extras/Loading";
import Boy from "../../Assets/images/avatars/netflix-avatar.png";
import dotaCover from "../../Assets/images/dota.png";
import dotaText from "../../Assets/images/dota-text.png";
import { pickProfile, getAllContent } from "../../Actions";
import Section from "../Section/Section";

function Browse(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!props.allContent) {
      props.getAllContent();
      // props.getContent("3c01a12c-4dcb-41e5-adfc-23fba729ebec");
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [props.user.pickedProfile]);

  return props.user.pickedProfile ? (
    <>
      {loading ? <Loading profileImg={Boy} loading={loading} /> : null}
      <div className="browse">
        <div className="browse--header">
          <img
            src={dotaCover}
            alt="dota"
            className="browse--header-cover-img"
          />
          <div className="browse--header-feature">
            <div className="browse--header-feature-poster">
              <img src={dotaText} alt="dota info" />
            </div>
            <p className="browse--header-feature-title">
              A hero with a beastly side. A princess on a quest. A world on the
              brink. Dragons are real, but all is not as it seems.
            </p>
            <button className="browse--header-feature-play">
              <div className="browse--header-feature-play-svg">
                <svg viewBox="0 0 24 24">
                  <path d="M6 4l15 8-15 8z" fill="currentColor" />
                </svg>
              </div>
              <span className="browse--header-feature-play-text">Play</span>
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
