/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { func, string } from 'prop-types';
import './ServiceDocumentsBtn.css';

export default function ServiceDocumentsBtn({ selectedItem, onClick, el }) {
  // TODO: Изменить состояние нажатия когда будет макет
  return (
    <button
      className={`policy-btn${selectedItem === el ? ' policy-btn_selected' : ''}`}
      onClick={onClick}
    >
      {el}
    </button>
  );
}

ServiceDocumentsBtn.propTypes = {
  selectedItem: string,
  onClick: func,
  el: string.isRequired,
};

ServiceDocumentsBtn.defaultProps = {
  onClick: () => {},
  selectedItem: '',
};
