import React, { useRef, useEffect } from 'react';
import {
  string, func, oneOfType, number, bool, objectOf
} from 'prop-types';
import './Textarea.css';
import Text from '../../Text/Text';
import Prompt from '../Prompt/Prompt';

export default function Textarea({
  title, placeholder, onChange,
  containerClassName, name, id,
  value, textareaClassName, disabled,
  required, errors, promptClasses,
  minLength, maxLength, prompt,
  titleClasses,
}) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      if (textareaRef.current.scrollHeight > textareaRef.current.clientHeight) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }
  }, [value]);

  return (
    <fieldset
      className={`custom-textarea${containerClassName ? ` ${containerClassName}` : ''}`}
      id={id}
    >
      {title && (
        <Text
          size="s"
          type="p"
          className={`
            custom-textarea__title${titleClasses ? ` ${titleClasses}` : ''}${
            disabled ? ' custom-textarea__title_disabled' : ''}
          `}
        >
          {title}
        </Text>
      )}
      <textarea
        ref={textareaRef}
        className={
          `custom-textarea__text${
            textareaClassName ? ` ${textareaClassName}` : ''}${
            errors[name] ? ' custom-textarea__text_type_error' : ''}
          `
        }
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        disabled={disabled}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
      <Prompt
        errors={errors[name]}
        prompt={prompt}
        disabled={disabled}
        promptClasses={promptClasses}
      />
    </fieldset>
  );
}

Textarea.propTypes = {
  title: string,
  placeholder: string,
  onChange: func.isRequired,
  containerClassName: string,
  textareaClassName: string,
  name: string,
  id: oneOfType([
    string,
    number,
  ]),
  value: string,
  disabled: bool,
  required: bool,
  errors: objectOf(string),
  promptClasses: string,
  minLength: string,
  maxLength: string,
  prompt: string,
  titleClasses: string,
};

Textarea.defaultProps = {
  promptClasses: '',
  errors: null,
  title: '',
  placeholder: '',
  containerClassName: '',
  textareaClassName: '',
  name: '',
  id: null,
  value: '',
  disabled: false,
  required: false,
  minLength: null,
  maxLength: null,
  prompt: null,
  titleClasses: '',
};
