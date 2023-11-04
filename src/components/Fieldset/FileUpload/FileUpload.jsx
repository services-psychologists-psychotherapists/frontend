import React, { useState, useRef } from 'react';
import {
  string, bool, oneOfType, number,
  func,
} from 'prop-types';
import './FileUpload.css';

export default function FileUpload({
  text, className, isRequired,
  id, name, onChange, disabled,
}) {
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    if (e.target.files) {
      if (e.target.files.length > 0) {
        const fileExtension = e.target.files[0].name.split('.').pop();
        if (fileExtension === 'pdf' || fileExtension === 'jpg') {
          setFileName(e.target.files[0].name);
        } else {
          setFileName('');
        }
        onChange(e);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      fileInputRef.current.click();
    }
  };

  return (
    <fieldset id={id || 'document'} className={`file-upload${className ? ` ${className}` : ''}`}>
      {fileName
        && (
          <div className="file-upload__file">
            <div className="file-upload__file-icon" />
            <span>{fileName}</span>
          </div>
        )}
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="file-upload__container"
      >
        <label
          className="file-upload__container__text"
        >
          {text}
          <input
            ref={fileInputRef}
            id={`file-upload_${name}`}
            name={name || 'document'}
            type="file"
            className="file-upload__input"
            onChange={handleFileUpload}
            required={isRequired}
            disabled={disabled}
          />
        </label>
      </div>

    </fieldset>
  );
}

FileUpload.propTypes = {
  text: string,
  className: string,
  isRequired: bool,
  id: oneOfType([
    string,
    number,
  ]),
  name: string,
  onChange: func,
  disabled: bool,
};

FileUpload.defaultProps = {
  text: '',
  className: '',
  isRequired: false,
  id: 'document',
  name: 'document',
  onChange: () => {},
  disabled: false,
};
