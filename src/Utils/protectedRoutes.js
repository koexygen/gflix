import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const _UserRedirect = ({ loggedIn, redirectPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!loggedIn) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: redirectPath,
              }}
            />
          );
        }
      }}
    />
  );
};

const _ProtectedRoute = ({ loggedIn, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (loggedIn) {
          return children;
        }

        if (!loggedIn) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

export const UserRedirect = connect(mapStateToProps)(_UserRedirect);
export const ProtectedRoute = connect(mapStateToProps)(_ProtectedRoute);
