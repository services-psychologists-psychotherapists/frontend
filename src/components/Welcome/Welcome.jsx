import React from 'react';
import PropTypes from 'prop-types';
import './Welcome.css';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Background from '../generic/Background/Background';

export default function Welcome(props) {
  return (
    <section className="welcome">
      <Header {...props} />
      <Banner {...props} />
      <Background {...props} />
    </section>
  );
}

Welcome.propTypes = {
  props: PropTypes.node.isRequired,
};
