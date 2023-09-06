import React from 'react';
import './HelpfulInformation.css';
import PropTypes from 'prop-types';
import Title from '../generic/Title/Title';

export default function HelpfulInformation({
  children,
  containerClassName,
  sectionClassName,
  size,
  text,
}) {
  return (
    <section className={`helpful-information ${sectionClassName || ''}`}>
      <Title size={size} text={text} />
      <div
        className={`helpful-information__container ${containerClassName || ''}`}
      >
        {children}
      </div>
    </section>
  );
}

HelpfulInformation.propTypes = {
  children: PropTypes.node,
  containerClassName: PropTypes.string,
  sectionClassName: PropTypes.string,
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

HelpfulInformation.defaultProps = {
  children: null,
  containerClassName: '',
  sectionClassName: '',
};
