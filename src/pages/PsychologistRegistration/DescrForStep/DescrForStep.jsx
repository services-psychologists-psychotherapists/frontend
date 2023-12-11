import React from 'react';
import { string, node } from 'prop-types';
import Title from '../../../components/generic/Title/Title';
import FormClue from '../FormClue/FormClue';

export default function DescrForStep({ className, children, title }) {
  return (
    <div className={`${className || 'psycho-registration__step_off'}`}>
      <Title
        text={title}
        className="psycho-registration__form-title"
        size="s"
      />
      <div className="psycho-registration__form-container">
        <FormClue />
        {children}
      </div>
    </div>
  );
}

DescrForStep.propTypes = {
  className: string,
  children: node.isRequired,
  title: string.isRequired,
};

DescrForStep.defaultProps = {
  className: '',
};
