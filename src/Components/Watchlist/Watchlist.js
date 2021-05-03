import React, { useEffect } from "react";
import "./Watchlist.scss";
import { connect } from "react-redux";
import Section from "../Section/Section";
import { getWatchlist, getAllContent } from "../../Actions";

const Watchlist = (props) => {
  useEffect(() => {
    props.getAllContent();
  }, []);

  return (
    <div className="watchlist">
      <h1 className="watchlist-title">My List</h1>
      {/*<Section allContent={props.watchlist} />*/}
      {props.content ? <Section allContent={props.content} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    watchlist: state.user.watchlist,
    content: state.content.allContent,
  };
};

export default connect(mapStateToProps, { getWatchlist, getAllContent })(
  Watchlist
);
