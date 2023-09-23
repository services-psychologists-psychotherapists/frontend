import avatar from '../images/avatar.png';
import psychologistAvatar from '../images/psychologist_avatar.png';
import clientAvatar from '../images/client_avatar.png';

export const PSYCHO = {
  first_name: 'Ирина',
  last_name: 'Кожевникова',
  id: '12345678907',
  age: 32,
  gender: 'female',
  phone_number: '+79100000000',
  experience: 10,
  price: 4500,
  themes: [
    { id: 5, title: 'Самооценка' },
    { id: 6, title: 'Карьера' },
  ],
  approaches: [
    {
      id: 4,
      title: 'Просто поговорить',
    },
  ],
  institutes: [
    {
      id: 1,
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
      id: 1,
      title: 'МГУ им. М.В. Ломоносова',
      graduation_year: '2016',
      speciality: 'Оптимизация современной системы психологической помощи',
      document: '/media/user...',
    },
    {
      id: 2,
      title: 'МГУ им. М.В. Ломоносова',
      graduation_year: '2016',
      speciality: 'Оптимизация современной системы психологической помощи',
      document: '/media/user...',
    },
  ],
  duration: 40,
  slots: [
    {
      id: 1,
      datetime_from: '23.09.2023 12:10',
    },
    {
      id: 2,
      datetime_from: '23.09.2023 13:20',
    },
    {
      id: 3,
      datetime_from: '23.09.2023 14:50',
    },
    {
      id: 4,
      datetime_from: '23.09.2023 17:20',
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
  next_session: {
    id: 121,
    psychologist: PSYCHO,
    datetime_from: '18.09.2023 19:20',
    datetime_to: '18.09.2023 20:10',
    client_link: '/zoom',
  },
  my_psychologist: PSYCHO,
};

export const SLOTS = [
  {
    id: '1277sdfsdf2344',
    client: null,
    datetime_from: '24.09.2023 08:20',
    datetime_to: '24.09.2023 09:10',
    href: '/zoom',
  },
  {
    id: '127723sdfs4422',
    client: null,
    datetime_from: '24.09.2023 10:20',
    datetime_to: '24.09.2023 11:10',
    href: '/zoom',
  },
  {
    id: '127734sdf567422',
    client: null,
    datetime_from: '24.09.2023 14:20',
    datetime_to: '24.09.2023 15:10',
    href: '/zoom',
  },
  {
    id: '127723234446782',
    client: null,
    datetime_from: '24.09.2023 16:20',
    datetime_to: '24.09.2023 17:10',
    href: '/zoom',
  },
  {
    id: '122342342345422',
    client: null,
    datetime_from: '24.09.2023 20:20',
    datetime_to: '24.09.2023 21:10',
    href: '/zoom',
  },
  {
    id: '127223423434522',
    client: null,
    datetime_from: '25.09.2023 19:20',
    datetime_to: '25.09.2023 20:10',
    href: '/zoom',
  },
  {
    id: '1277234234234522',
    client: null,
    datetime_from: '26.09.2023 10:20',
    datetime_to: '26.09.2023 21:10',
    href: '/zoom',
  },
  {
    id: '12772234234235462',
    client: CLIENT,
    datetime_from: '26.09.2023 19:20',
    datetime_to: '26.09.2023 20:10',
    href: '/zoom',
  },
  {
    id: '121234422',
    client: CLIENT,
    datetime_from: '26.09.2023 20:20',
    datetime_to: '26.09.2023 21:10',
    href: '/zoom',
  },
  {
    id: '1277212322',
    client: CLIENT,
    datetime_from: '26.09.2023 22:20',
    datetime_to: '26.09.2023 23:10',
    href: '/zoom',
  },
  {
    id: '1272344422',
    client: CLIENT,
    datetime_from: '27.09.2023 19:20',
    datetime_to: '27.09.2023 20:10',
    href: '/zoom',
  },
];

export const USER = {
  name: 'Ирина',
  last_name: 'Кожевникова',
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
