import React, { useState } from 'react';
import '../../../App/App.css';
import './TimeCellBtn.css';
import TimeCellBtn from './TimeCellBtn';

export default {
  title: 'Global components/Time button/TimeCellBtn',
  component: TimeCellBtn,
  tags: ['autodocs'],
  argTypes: {
    time: {
      type: 'string',
      description: 'Время в формате HH:mm',
      control: {
        type: 'text',
      },
    },
    active: {
      type: 'bool',
      description:
        'Булевое значение для отображения активного состояния кнопки. Например, если выбранное время === времени в ячейке, то кнопка становится активной',
      control: false,
    },
    onClick: {
      type: 'func',
      description:
        'Функция, которая вызывается при клике на кнопку. Например сейчас меняет состояние active',
      control: false,
    },
    id: {
      type: 'number',
      description:
        'Идентификатор кнопки, который будет отправляться при запросе на бронирование времени',
    },
  },
};

function Template(args) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return <TimeCellBtn {...args} onClick={handleClick} active={active} />;
}

export const Default = Template.bind({});

Default.args = {
  time: '10:00',
  id: 1,
};
