import React, { useEffect } from "react";
import "./Watchlist.scss";
import { connect } from "react-redux";
import Section from "../Section/Section";
import { getWatchlist } from "../../Actions";

const Watchlist = (props) => {
  const getWatchList = props.getWatchlist;

  useEffect(() => {
    getWatchList();
  }, [getWatchList]);

  return (
    <div className="watchlist">
      <h1 className="watchlist-title">My List</h1>
      {props.watchlist ? <Section allContent={props.watchlist} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    watchlist: state.user.watchlist,
    content: state.content.allContent,
  };
};

export default connect(mapStateToProps, { getWatchlist })(Watchlist);
