import React from 'react';
import './CalendarBlock.css';
import PropTypes from 'prop-types';

export default function CalendarBlock({ text, children }) {
  return (
    <div className="psychologist-account__calendar">
      <p className="psychologist-account__subtitle">{text}</p>
      {children}
    </div>
  );
}

CalendarBlock.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

CalendarBlock.defaultProps = {
  text: 'Календарь сессий',
};
