import './Prompt.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function Prompt({
  prompt, disabled, errors, promptClasses
}) {
  const errorClassName = errors ? 'field-container__prompt_visible-error' : '';
  const promptClassName = prompt && !errors && !disabled
    ? 'field-container__prompt_visible-prompt' : '';

  return (
    <span
      className={`field-container__prompt ${
        promptClasses || 'field-container__prompt-height'
      } ${errorClassName} ${promptClassName}`}
    >
      {errors || prompt}
    </span>
  );
}

Prompt.propTypes = {
  disabled: PropTypes.bool,
  errors: PropTypes.string,
  prompt: PropTypes.string,
  promptClasses: PropTypes.string,
};

Prompt.defaultProps = {
  disabled: null,
  prompt: null,
  errors: null,
  promptClasses: '',
};
