import React from 'react';
import './DocsForRegistr.css';
import ServiceDocuments from '../../../components/generic/ServiceDocuments/ServiceDocuments';
import Text from '../../../components/generic/Text/Text';

export default function DocsForRegistr() {
  return (
    <div
      className="data-list__documents"
    >
      <Text
        size="s"
        type="span"
      >
        Нажимая кнопку «Подать заявку», Вы соглашаетесь c
      </Text>
      <ServiceDocuments
        textVariant="whereby"
        className="auth__service-documents_text"
      />
    </div>
  );
}
