import React, { useState } from 'react';
import '../../App/App.css';
import './ServiceDocuments.css';
import ServiceDocuments from './ServiceDocuments';

export default {
  title: 'Global components/ServiceDocuments/ServiceDocuments',
  component: ServiceDocuments,
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
    className: {
      type: 'string',
      description: 'Дополнительный класс для роботы с окружением и направлением элементов',
      control: false,
    },
  },
};

function Template() {
  const [selectedItem, setSelectedItem] = useState('');
  const onClick = (e) => {
    setSelectedItem(e);
  };

  return <ServiceDocuments selectedItem={selectedItem} onClick={onClick} />;
}

export const Default = Template.bind({});
