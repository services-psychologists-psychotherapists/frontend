import moment from 'moment';
import avatar from '../images/avatar.png';

export const SLOTS = [
  {
    id: '123123123123',
    time: '23.09.2023 14:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '123423123123',
    time: '23.09.2023 14:20',
    isFree: true,
  },
  {
    id: '123123123423',
    time: '23.09.2023 14:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '123123123163',
    time: '23.09.2023 14:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '128123123123',
    time: '23.09.2023 14:20',
    isFree: true,
    href: '/zoom',
  },
  {
    id: '123122123123',
    time: '23.09.2023 14:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '123123123222',
    time: '23.09.2023 14:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '123333123123',
    time: '18.09.2023 12:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '123123144423',
    time: '23.09.2023 14:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '123126663123',
    time: '23.09.2023 14:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '127777123123',
    time: '18.09.2023 14:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
    href: '/zoom',
  },
];

export const USER = {
  name: 'Ирина',
  lastName: 'Кожевникова',
  id: '12345678907',
  img: avatar,
};

export const PSYCHO = {
  name: 'Ирина',
  lastName: 'Кожевникова',
  id: '12345678907',
  dateOfBith: '18.09.1990',
  img: avatar,
  slots: [
    {
      id: '123123123222',
      time: '23.09.2023 14:20',
      patient: {
        name: 'Полина',
        lastName: 'Коновалова',
        id: '1234567890',
      },
      isFree: false,
    },
    {
      id: '123333123123',
      time: '18.09.2023 12:20',
      patient: {
        name: 'Полина',
        lastName: 'Коновалова',
        id: '1234567890',
      },
      isFree: false,
    },
  ],
  about:
    'Я клинический психолог, гештальт-терапевт с 12-летним опытом работы в профессии. Помогаю людям развивать осознанность, эмоциональный интеллект и строить здоровые, счастливые отношения.',
  exp: 12,
  timeOfSession: 40,
  areasOfWork: [
    'Самооценка',
    'Карьера',
    'Непонятные мысли',
    'Разобраться в себе',
  ],
  specializations: ['Гештальт-терапия'],
  education: [
    {
      name: 'Московский педагогический государственный университет им. В.И. Ленина',
      years: '2013 - 2015',
      major: 'психолог-консультант',
    },
  ],
  training: [
    {
      name: 'МГУ им. М.В. Ломоносова',
      years: '2016',
      major: 'Оптимизация современной системы психологической помощи',
    },
    {
      name: 'МГУ им. М.В. Ломоносова',
      years: '2020',
      major: 'Теория и практика арт-терапии',
    },
  ],
  price: 4500,
};

export const SLOT = {
  client: {
    name: 'Ирина',
    lastName: 'Кожевникова',
    id: '12345678907',
    dateOfBith: '18.09.1990',
    img: avatar,
  },
  psycho: {
    name: 'Ирина',
    lastName: 'Кожевникова',
    id: '12345678907',
    dateOfBith: '18.09.1990',
    img: avatar,
  },
  date: moment('18.09.2023 15:20', 'DD.MM.YYYY hh:mm'),
  href: '/zoom',
};
