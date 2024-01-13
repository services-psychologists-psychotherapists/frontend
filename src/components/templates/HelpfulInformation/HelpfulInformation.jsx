import React from 'react';
import './HelpfulInformation.css';
import { node, string } from 'prop-types';
import Title from '../../generic/Title/Title';

export default function HelpfulInformation({
  children,
  containerClassName,
  sectionClassName,
  size,
  text,
}) {
  return (
    <section className={`helpful-information ${sectionClassName}`}>
      <div className="helpful-information__container">
        <Title size={size} text={text} />
        <div className={`helpful-information__info ${containerClassName}`}>{children}</div>
      </div>
    </section>
  );
}

HelpfulInformation.propTypes = {
  children: node,
  containerClassName: string,
  sectionClassName: string,
  size: string.isRequired,
  text: string.isRequired,
};

HelpfulInformation.defaultProps = {
  children: null,
  containerClassName: '',
  sectionClassName: '',
};
