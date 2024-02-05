import './Prompt.css';
import React from 'react';
import { bool, string } from 'prop-types';

export default function Prompt({
  prompt, disabled, errors, promptClasses
}) {
  const errorClassName = errors ? ' field-prompt_type_visible-error' : '';
  const promptClassName = prompt && !errors && !disabled
    ? ' field-prompt_type_visible-prompt' : '';

  return (
    <span
      className={`field-prompt${
        promptClasses ? ` ${promptClasses}` : ' field-prompt_type_standart-height'
      }${errorClassName}${promptClassName}`}
    >
      {errors || prompt}
    </span>
  );
}

Prompt.propTypes = {
  disabled: bool,
  errors: string,
  prompt: string,
  promptClasses: string,
};

Prompt.defaultProps = {
  disabled: null,
  prompt: null,
  errors: null,
  promptClasses: '',
};
