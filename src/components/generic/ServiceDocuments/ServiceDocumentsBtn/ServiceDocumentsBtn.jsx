/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { func, string } from 'prop-types';
import './ServiceDocumentsBtn.css';

export default function ServiceDocumentsBtn({ onClick, el }) {
  return (
    <button
      className="policy-btn"
      onClick={onClick}
      type="button"
    >
      {el}
    </button>
  );
}

ServiceDocumentsBtn.propTypes = {
  onClick: func,
  el: string.isRequired,
};

ServiceDocumentsBtn.defaultProps = {
  onClick: () => {},
};
