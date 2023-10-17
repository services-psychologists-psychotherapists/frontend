import './Prompt.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function Prompt({
  prompt, disabled, errors, promptClasses
}) {
  const errorClassName = errors ? 'field-container__prompt_visible-error' : '';
  const promptClassName = prompt && !errors && !disabled
    ? 'field-container__prompt_visible-prompt' : '';

  const maxErrorLength = 50;
  const trimmedErrors = errors && errors.length > maxErrorLength ? `${errors.substring(0, maxErrorLength)}...` : errors;

  return (
    <span
      className={`field-container__prompt ${
        promptClasses || 'field-container__prompt-height'
      } ${errorClassName} ${promptClassName}`}
    >
      {trimmedErrors || prompt}
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
