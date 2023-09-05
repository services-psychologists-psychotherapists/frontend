import React from 'react';
import PropTypes from 'prop-types';
import './Welcome.css';
import Header from '../Header/Header';
import Background from '../generic/Background/Background';

export default function Welcome({ children, animated, isLoggedIn }) {
  return (
    <section className="welcome">
      <Header isLoggedIn={isLoggedIn} />
      {children}
      <Background animated={animated} />
    </section>
  );
}

Welcome.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  animated: PropTypes.bool.isRequired,
};
