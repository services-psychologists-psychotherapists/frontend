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
      description:
        'Дополнительный класс для роботы с окружением, направлением элементов и шрифтом текста',
      control: false,
    },
    textVariant: {
      type: 'select',
      description:
        'Варианты отображения окончания текстов документов, смотреть в constants SERVICE_DOCUMENTS',
      options: ['default', 'whereby'],
      control: {
        type: 'select',
      },
    },
  },
};

function Template(args) {
  const [selectedItem, setSelectedItem] = useState('');
  const onClick = (e) => {
    if (selectedItem) {
      setSelectedItem('');
    } else {
      setSelectedItem(e);
    }
  };

  return <ServiceDocuments selectedItem={selectedItem} onClick={onClick} {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  textVariant: 'default',
};
