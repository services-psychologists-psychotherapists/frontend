import './Prompt.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function Prompt({
  name,
  prompt,
  disabled,
  errors,
  values,
}) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {(errors[name] && (
        <span className="field__span_visible field__span_visible-error">
          {errors[name]}
        </span>
      ))
        || (!values[name]
          && prompt
          && !errors[name]
          && !disabled && (
            <span className="field__span_visible field__span_visible-prompt">
              {prompt}
            </span>
        )) || <span className="field__span_not-visible">{errors[name]}</span>}
    </>
  );
}

Prompt.propTypes = {
  name: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  errors: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};
