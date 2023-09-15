import React from 'react';
import './SheduleSection.css';
import PropTypes from 'prop-types';

export default function SheduleSection({ children }) {
  return (
    <div className="psychologist-account__shedule-section">{children}</div>
  );
}

SheduleSection.propTypes = {
  children: PropTypes.node.isRequired,
};
