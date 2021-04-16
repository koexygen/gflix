import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserRedirect = ({ loggedIn, redirectPath, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (loggedIn) {
        return (
          <Redirect
            to={{
              pathname: redirectPath,
              from: location.path,
            }}
          />
        );
      } else {
        return children();
      }
    }}
  />
);

const mapStateToProps = (state) => ({ loggedIn: state.user.loggedIn });

export default connect(mapStateToProps)(UserRedirect);
