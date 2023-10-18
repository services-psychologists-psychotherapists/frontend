import React from 'react';
import { bool, func } from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function ProtectedRouteElement({ element: Component, loggedIn, ...props }) {
  return loggedIn ? <Component {...props} /> : <Navigate to="/" replace />;
}

ProtectedRouteElement.propTypes = {
  element: func.isRequired,
  loggedIn: bool.isRequired,
};
