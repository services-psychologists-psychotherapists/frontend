import React, { useState } from 'react';
import { string } from 'prop-types';
import './FileUpload.css';

export default function FileUpload({ text, className }) {
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e) => {
    setFileName(e.target.files[0].name);
  };

  return (
    <fieldset className={`file-upload${className ? ` ${className}` : ''}`}>
      {fileName
        && (
          <div className="file-upload__file">
            <div className="file-upload__file-icon" />
            <span>{fileName}</span>
          </div>
        )}

      <label className="file-upload__container">
        {text}
        <input
          type="file"
          className="file-upload__input"
          onChange={handleFileUpload}
        />
      </label>
    </fieldset>
  );
}

FileUpload.propTypes = {
  text: string,
  className: string,
};

FileUpload.defaultProps = {
  text: '',
  className: '',
};
