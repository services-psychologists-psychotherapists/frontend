import React from 'react';
import moment from 'moment';
import '../App/App.css';
import './Сalendar.css';
import Calendar from './Сalendar';
import { formattedToday } from '../../utils/helpers';

export default {
  title: 'Global components/Calendar/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '588px',
          width: '100%',
          height: '304px',
          margin: '0 150px 100px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onDateCellClick: {
      type: 'func',
      description:
        'Функция, которая вызывается при клике на день с передаваемым в нее объектом даты moment для дальнейшего использования работы с датами. Сейчас выводится в консоль',
      control: false,
    },
    titleText: {
      type: 'string',
      description: 'Текст для заголовка',
      control: {
        type: 'text',
      },
    },
    onResetClick: {
      type: 'func',
      description:
        'Функция, которая вызывается при клике на кнопку "Сброс". Например, сброс выбранного дня на текущий',
      control: false,
    },
    freeSlotsArray: {
      type: 'array',
      description:
        'Преобразованные слоты с сервера в массив удобной структуры для работы с ячейками даты, содержащий информацию о свободных местах',
      control: {
        type: 'array',
      },
    },
  },
};

function Template(args) {
  return <Calendar {...args} />;
}

export const Default = Template.bind({});

export const ForRegistrationSession = Template.bind({});

Default.args = {
  onDateCellClick: (date) => console.log(date),
  titleText: 'Календарь сессий',
  onResetClick: () => console.log('Сброс'),
  freeSlotsArray: [],
};

ForRegistrationSession.args = {
  onDateCellClick: (date) => console.log(date),
  titleText: 'Запись на сессию',
  onResetClick: () => console.log('Сброс'),
  freeSlotsArray: [
    {
      date: formattedToday,
      times: [
        { id: 1, time: '10:00' },
        { id: 2, time: '11:00' },
        { id: 3, time: '12:00' },
        { id: 4, time: '13:00' },
        { id: 5, time: '14:00' },
        { id: 6, time: '15:00' },
        { id: 7, time: '16:00' },
        { id: 8, time: '17:00' },
        { id: 9, time: '18:00' },
        { id: 10, time: '19:00' },
      ],
    },
    {
      date: moment(formattedToday, 'DD.MM.YYYY').add(1, 'days').format('DD.MM.YYYY'),
      times: [
        { id: 11, time: '14:00' },
        { id: 12, time: '15:00' },
        { id: 13, time: '16:00' },
        { id: 14, time: '17:00' },
        { id: 15, time: '18:00' },
      ],
    },
    {
      date: moment(formattedToday, 'DD.MM.YYYY').add(2, 'days').format('DD.MM.YYYY'),
      times: [
        { id: 16, time: '14:00' },
        { id: 17, time: '15:00' },
        { id: 18, time: '16:00' },
        { id: 19, time: '17:00' },
        { id: 20, time: '18:00' },
      ],
    },
    {
      date: moment(formattedToday, 'DD.MM.YYYY').add(3, 'days').format('DD.MM.YYYY'),
      times: [
        { id: 21, time: '14:00' },
        { id: 22, time: '15:00' },
        { id: 23, time: '16:00' },
        { id: 24, time: '17:00' },
        { id: 25, time: '18:00' },
      ],
    },
    {
      date: moment(formattedToday, 'DD.MM.YYYY').add(5, 'days').format('DD.MM.YYYY'),
      times: [
        { id: 26, time: '10:00' },
        { id: 27, time: '11:00' },
        { id: 28, time: '12:00' },
        { id: 29, time: '13:00' },
        { id: 30, time: '14:00' },
        { id: 31, time: '15:00' },
        { id: 32, time: '16:00' },
        { id: 33, time: '17:00' },
        { id: 34, time: '18:00' },
        { id: 35, time: '19:00' },
      ],
    },
    {
      date: moment(formattedToday, 'DD.MM.YYYY').add(10, 'days').format('DD.MM.YYYY'),
      times: [
        { id: 36, time: '14:00' },
        { id: 37, time: '15:00' },
        { id: 38, time: '16:00' },
        { id: 39, time: '17:00' },
        { id: 40, time: '18:00' },
      ],
    },
  ],
};
