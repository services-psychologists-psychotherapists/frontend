import React, { useState } from 'react';
import '../../../App/App.css';
import './ServiceDocumentsBtn.css';
import ServiceDocumentsBtn from './ServiceDocumentsBtn';

export default {
  title: 'Global components/ServiceDocuments/ServiceDocumentsBtn/ServiceDocumentsBtn',
  component: ServiceDocumentsBtn,
  argTypes: {
    onClick: {
      type: 'func',
      description: 'Функция, которая вызывается при клике на документ',
      control: false,
    },
    selectedItem: {
      type: 'string',
      description: 'Текущий выбранный документ',
      control: {
        type: 'text',
      },
    },
    el: {
      type: 'string',
      description: 'Текст документа',
      control: {
        type: 'text',
      },
    },
  },
};

function Template() {
  const defaultValue = 'Политика конфиденциальности';
  const [selectedItem, setSelectedItem] = useState('');
  const onClick = (e) => {
    if (selectedItem) {
      setSelectedItem('');
    } else {
      setSelectedItem(e.target.innerText);
    }
  };

  return <ServiceDocumentsBtn el={defaultValue} selectedItem={selectedItem} onClick={onClick} />;
}

export const Default = Template.bind({});
