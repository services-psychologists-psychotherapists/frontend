import React, { useState } from 'react';
import '../../../App/App.css';
import './TimeContainer.css';
import '../../../../pages/SessionRegistrationForClient/SessionRegistrationForClient.css';
import TimeContainer from './TimeContainer';

export default {
  title: 'Global components/Time button/TimeContainer',
  component: TimeContainer,
  tags: ['autodocs'],
  argTypes: {
    timeCells: {
      type: 'array',
      description:
        'Массив со слотами времени. Прокрутка работает через шифт. Также висит хук с возможностью изменения скорости для прокрутки по клику на контейнер',
      control: {
        type: 'array',
      },
    },
    containerClassName: {
      type: 'string',
      description: 'Дополнительный класс контейнера для установки размера и работы с окружением',
      control: false,
    },
    onClick: {
      type: 'func',
      description:
        'Обработчик события клика. Использовуется, например, для назначения переменной времени по клику на ячейку',
      control: false,
    },
    selectedTime: {
      type: 'string',
      description: 'Выбранное время для отрисовки active состояния',
      control: false,
    },
  },
};

function Template(args) {
  const [selectedTime, setSelectedTime] = useState('11:00');

  const handleClick = (e) => {
    setSelectedTime(e.target.innerText);
  };

  return <TimeContainer {...args} selectedTime={selectedTime} onClick={handleClick} />;
}

export const Default = Template.bind({});

Default.args = {
  timeCells: [
    { id: 1, time: '11:00' },
    { id: 2, time: '14:00' },
    { id: 3, time: '15:00' },
    { id: 4, time: '16:00' },
    { id: 5, time: '17:00' },
    { id: 6, time: '18:00' },
    { id: 7, time: '19:00' },
    { id: 8, time: '20:00' },
  ],
  containerClassName: 'session-registration__time-container',
};
