import React from 'react';
import { string, func } from 'prop-types';
import './ServiceDocuments.css';
import ServiceDocumentsBtn from './ServiceDocumentsBtn/ServiceDocumentsBtn';
import { SERVICE_DOCUMENTS } from '../../../constants/constants';

export default function ServiceDocuments({
  onClick, selectedItem, className, textVariant
}) {
  // TODO: Возможно убрать отдельный компонент кнопки и сделать ее тут
  // TODO: Добавить ссылки для объектов?
  return (
    <ul className={`policy-container${className ? ` ${className}` : ' policy-container_text'}`}>
      {SERVICE_DOCUMENTS[textVariant].map((el) => (
        <li key={el.text}>
          <ServiceDocumentsBtn
            selectedItem={selectedItem}
            onClick={() => onClick(el.text)}
            el={el.text}
            className={className}
          />
        </li>
      ))}
    </ul>
  );
}

ServiceDocuments.propTypes = {
  textVariant: string,
  selectedItem: string,
  onClick: func,
  className: string,
};

ServiceDocuments.defaultProps = {
  onClick: () => {},
  selectedItem: '',
  className: '',
  textVariant: 'default',
};
