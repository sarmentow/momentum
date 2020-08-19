import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ children, ...rest }) {
  const { state } = useContext(GlobalContext);
  const { user } = state;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.githubId !== undefined ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
