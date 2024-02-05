import React from 'react';
import { func } from 'prop-types';
import './DocsForRegistr.css';
import ServiceDocuments from '../../../components/generic/ServiceDocuments/ServiceDocuments';
import Text from '../../../components/generic/Text/Text';

export default function DocsForRegistr({ setValue, showPopupWithValue }) {
  return (
    <div className="data-list__documents">
      <Text size="s" type="span">
        Нажимая кнопку «Подать заявку», Вы соглашаетесь c
      </Text>
      <ServiceDocuments
        textVariant="whereby"
        className="data-list__documents-text"
        onClick={() => showPopupWithValue(setValue, 'Документ')}
      />
    </div>
  );
}

DocsForRegistr.propTypes = {
  setValue: func.isRequired,
  showPopupWithValue: func.isRequired,
};
