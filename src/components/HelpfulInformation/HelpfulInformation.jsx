import React from 'react';
import './HelpfulInformation.css';
import PropTypes from 'prop-types';
import Title from '../generic/Title/Title';

export default function HelpfulInformation({
  children,
  containerClassName,
  sectionClassName,
  ...props
}) {
  return (
    <section className={`helpful-information ${sectionClassName || ''}`}>
      <Title {...props} />
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
};

HelpfulInformation.defaultProps = {
  children: null,
  containerClassName: '',
  sectionClassName: '',
};
