import React, { useEffect, useState } from "react";
import "./Browse.scss";
import ProfilePick from "../ProfilePick/ProfilePick";
import { connect } from "react-redux";
import Loading from "../extras/Loading";
import Boy from "../../Assets/images/avatars/netflix-avatar.png";

function Browse(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [props.user.username]);

  return props.user.pickedProfile ? (
    <>
      {loading ? <Loading profileImg={Boy} /> : null}
      <div className="browse">
        <h1>hi from Browse Page</h1>
      </div>
    </>
  ) : (
    <ProfilePick profileImg={Boy} username={props.user.username} />
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Browse);
