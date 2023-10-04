import React from 'react';
import { string, func } from 'prop-types';
import './ServiceDocuments.css';
import ServiceDocumentsBtn from './ServiceDocumentsBtn/ServiceDocumentsBtn';
import { SERVICE_DOCUMENTS } from '../../../constants/constants';

export default function ServiceDocuments({ onClick, selectedItem, className }) {
  // TODO: Возможно убрать отдельный компонент кнопки и сделать ее тут
  return (
    <ul className={`policy-container${className ? ` ${className}` : ''}`}>
      {SERVICE_DOCUMENTS.map((el) => (
        <li key={el}>
          <ServiceDocumentsBtn
            selectedItem={selectedItem}
            onClick={() => onClick(el)}
            el={el}
            className={className}
          />
        </li>
      ))}
    </ul>
  );
}

ServiceDocuments.propTypes = {
  selectedItem: string,
  onClick: func,
  className: string,
};

ServiceDocuments.defaultProps = {
  onClick: () => {},
  selectedItem: '',
  className: '',
};
