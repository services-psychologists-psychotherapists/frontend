import moment from 'moment';
import avatar from '../images/avatar.png';
import psychologistAvatar from '../images/psychologist_avatar.png';
import clientAvatar from '../images/client_avatar.png';

export const PSYCHO = {
  first_name: 'Ирина',
  last_name: 'Кожевникова',
  id: '12345678907',
  birthday: '18.09.1990',
  gender: 'female',
  phone_number: '+79100000000',
  experience: 10,
  price: 4500,
  themes: [
    { id: 5, title: 'самооценка' },
    { id: 6, title: 'карьера' },
  ],
  approaches: [
    {
      id: 4,
      title: 'просто поговорить',
    },
  ],
  institutes: [
    {
      title: 'ВШЭ',
      speciality: 'Психолог',
      graduation_year: '2010-2012',
      document: '/media/user...',
    },
  ],
  avatar: psychologistAvatar,
  about:
    'Я клинический психолог, гештальт-терапевт с 12-летним опытом работы в профессии. Помогаю людям развивать осознанность, эмоциональный интеллект и строить здоровые, счастливые отношения.',
  courses: [
    {
      title: 'МГУ им. М.В. Ломоносова',
      graduation_year: '2016',
      speciality: 'Оптимизация современной системы психологической помощи',
      document: '/media/user...',
    },
  ],
};

export const CLIENT = {
  first_name: 'Полина',
  last_name: 'Коновалова',
  id: '1234567890',
  birthday: '10.01.1988',
  phone_number: '+79100000000',
  avatar: clientAvatar,
};

const SLOT = {
  psychologist: PSYCHO,
  datetime_from: '18.09.2023 19:20',
  datetime_to: '18.09.2023 20:10',
  is_free: false,
};

const SLOT_2 = JSON.parse(JSON.stringify(SLOT));
SLOT_2.datetime_from = moment('20.09.2023 19:20', 'DD.MM.YYYY hh:mm');
SLOT_2.datetime_to = moment('20.09.2023 20:10', 'DD.MM.YYYY hh:mm');

const SLOT_3 = JSON.parse(JSON.stringify(SLOT));
SLOT_3.datetime_from = '24.09.2023 19:20';
SLOT_3.datetime_to = '24.09.2023 20:10';

export const SLOTS = [
  {
    id: '1277234422',
    client: CLIENT,
    slot: SLOT_2,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '127030312422',
    client: CLIENT,
    slot: SLOT_2,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '1272343422',
    client: CLIENT,
    slot: SLOT_3,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '127774545422',
    client: CLIENT,
    slot: SLOT,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '1213512422',
    client: CLIENT,
    slot: SLOT,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '1274563422',
    client: CLIENT,
    slot: SLOT,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '1273452422',
    client: CLIENT,
    slot: SLOT,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '12775542422',
    client: CLIENT,
    slot: SLOT,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '12777756422',
    client: CLIENT,
    slot: SLOT,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '1277345422',
    client: CLIENT,
    slot: SLOT,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '12345512422',
    client: CLIENT,
    slot: SLOT,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '127674433422',
    client: CLIENT,
    slot: SLOT,
    status: 'Оплаченный',
    href: '/zoom',
  },
  {
    id: '1276582422',
    client: CLIENT,
    slot: SLOT,
    status: 'Оплаченный',
    href: '/zoom',
  },
];

export const USER = {
  name: 'Ирина',
  lastName: 'Кожевникова',
  id: '12345678907',
  img: avatar,
  psycho: {
    name: 'Ирина',
    lastName: 'Кожевникова',
    id: '12345678907',
    price: 4500,
    timeOfSession: 40,
    img: avatar,
  },
  sessions: [
    {
      client: {
        name: 'Ирина',
        lastName: 'Кожевникова',
        id: '12345678907',
        dateOfBith: new Date(1990, 4, 23),
        img: avatar,
      },
      psycho: {
        name: 'Ирина',
        lastName: 'Кожевникова',
        id: '12345678907',
        dateOfBith: new Date(1990, 4, 23),
        img: avatar,
      },
      date: new Date(2023, 8, 25, 19),
      href: '/zoom',
    },
    {
      client: {
        name: 'Ирина',
        lastName: 'Кожевникова',
        id: '12345678907',
        dateOfBith: new Date(1990, 4, 23),
        img: avatar,
      },
      psycho: {
        name: 'Ирина',
        lastName: 'Кожевникова',
        id: '12345678907',
        dateOfBith: new Date(1990, 4, 23),
        img: avatar,
      },
      date: new Date(2023, 9, 17, 17),
      href: '/zoom',
    },
    {
      client: {
        name: 'Ирина',
        lastName: 'Кожевникова',
        id: '12345678907',
        dateOfBith: new Date(1990, 4, 23),
        img: avatar,
      },
      psycho: {
        name: 'Ирина',
        lastName: 'Кожевникова',
        id: '12345678907',
        dateOfBith: new Date(1990, 4, 23),
        img: avatar,
      },
      date: new Date(2023, 5, 22, 13),
      href: '/zoom',
    },
  ],
};

export const PSYCHOLOGIST_ACCOUNT_LINKS = [
  {
    text: 'Главная',
    link: '/psychologist_account',
  },
  {
    text: 'Расписание',
    link: '/psychologist_account_schedule',
  },
  {
    text: 'Профиль',
    link: '/psychologist_account_profile',
  },
];

export const PSYCHOLOGIST_ACCOUNT_TEXT = {
  txtCalendarInMain: 'Календарь сессий',
  txtReminderInMain: 'Ближайшая сессия',
  txtCalendarInShedule: '1. Выберите день',
  txtReminderInShedule: '2. Добавьте доступное время сессии',
  txtTitleInMain: 'Главная',
  txtTitlenShedule: 'Расписание',
  txtTitleInProfile: 'Профиль',
};

export const TIMING_HOURS = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
];

export const TIMING_MINUTES = [
  '00',
  '05',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
];

export const FREE_SLOTS = [
  {
    id: 1,
    time: '29.09.2023 23:00',
  },
  {
    id: 2,
    time: '29.09.2023 11:00',
  },
  {
    id: 3,
    time: '29.09.2023 12:00',
  },
  {
    id: 4,
    time: '29.09.2023 13:00',
  },
  {
    id: 5,
    time: '29.09.2023 14:00',
  },
  {
    id: 6,
    time: '29.09.2023 15:00',
  },
  {
    id: 7,
    time: '29.09.2023 16:00',
  },
  {
    id: 8,
    time: '29.09.2023 17:00',
  },
  {
    id: 9,
    time: '30.09.2023 11:00',
  },
  {
    id: 10,
    time: '30.09.2023 12:00',
  },
  {
    id: 11,
    time: '30.09.2023 13:00',
  },
  {
    id: 12,
    time: '30.09.2023 14:00',
  },
  {
    id: 13,
    time: '01.09.2023 11:00',
  },
  {
    id: 14,
    time: '01.09.2023 12:00',
  },
  {
    id: 15,
    time: '01.09.2023 13:00',
  },
  {
    id: 16,
    time: '01.09.2023 14:00',
  },
  {
    id: 17,
    time: '01.09.2023 15:00',
  },
  {
    id: 18,
    time: '02.09.2023 11:00',
  },
  {
    id: 19,
    time: '02.09.2023 12:00',
  },
  {
    id: 20,
    time: '02.09.2023 13:00',
  },
  {
    id: 21,
    time: '03.10.2023 11:00',
  },
  {
    id: 22,
    time: '03.10.2023 12:00',
  },
  {
    id: 23,
    time: '03.10.2023 13:00',
  },
  {
    id: 24,
    time: '04.10.2023 11:00',
  },
  {
    id: 25,
    time: '04.10.2023 12:00',
  },
  {
    id: 26,
    time: '04.10.2023 13:00',
  },
  {
    id: 27,
    time: '04.10.2023 14:00',
  },
  {
    id: 28,
    time: '04.10.2023 15:00',
  },
  {
    id: 29,
    time: '04.10.2023 16:00',
  },
  {
    id: 30,
    time: '04.10.2023 17:00',
  },
  {
    id: 31,
    time: '04.10.2023 18:00',
  },
  {
    id: 32,
    time: '07.10.2023 11:00',
  },
  {
    id: 33,
    time: '07.10.2023 12:00',
  },
  {
    id: 34,
    time: '10.10.2023 11:00',
  },
];

export const FULL_PSYCHO_CARD = {
  id: 1,
  first_name: 'Ирина',
  last_name: 'Кожевникова',
  about: 'Описание',
  price: 4500,
  avatar,
  experience: 10,
  duration: 40,
  slots: [
    {
      id: 1,
      datetime_from: '29.09.2023 11:00',
    },
  ],
  age: 20,
  speciality: 'Психолог',
  themes: [
    {
      id: 1,
      title: 'Тема',
    },
  ],
  approaches: [
    {
      id: 1,
      title: 'Процедура',
    },
  ],
  institutes: [
    {
      title: 'Институт',
      speciality: 'Психолог',
      graduation_year: 2023,
    },
  ],
  courses: [
    {
      title: 'Курсы',
      speciality: 'Психолог',
      graduation_year: 2023,
    },
  ],
};
