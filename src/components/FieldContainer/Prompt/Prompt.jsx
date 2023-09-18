import './Prompt.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function Prompt({
  prompt,
  disabled,
  errors,
}) {
  return (
    (errors && (
      <span className="field-container__prompt field-container__prompt_visible-error">
        {errors}
      </span>
    ))
      || (prompt
        && !errors
        && !disabled && (
          <span className="field-container__prompt field-container__prompt_visible-prompt">
            {prompt}
          </span>
      )) || <span className="field-container__prompt_not-visible" />
  );
}

Prompt.propTypes = {
  disabled: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  prompt: PropTypes.string,
};

Prompt.defaultProps = {
  prompt: '',
  errors: ''
};
