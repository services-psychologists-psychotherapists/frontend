import avatar from '../images/avatar.png';

export const SLOTS = [
  {
    id: '123123123123',
    time: new Date(2023, 8, 29, 9),
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
  },
  {
    id: '123423123123',
    time: new Date(2023, 8, 29, 10),
    isFree: true,
  },
  {
    id: '123123123423',
    time: new Date(2023, 8, 29, 11),
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
  },
  {
    id: '123123123163',
    time: new Date(2023, 8, 29, 12),
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
  },
  {
    id: '128123123123',
    time: new Date(2023, 8, 29, 13),
    isFree: true,
  },
  {
    id: '123122123123',
    time: new Date(2023, 8, 29, 14),
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
  },
  {
    id: '123123123222',
    time: new Date(2023, 8, 29, 15),
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
  },
  {
    id: '123333123123',
    time: new Date(2023, 8, 29, 16),
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
  },
  {
    id: '123123144423',
    time: new Date(2023, 8, 29, 17),
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
  },
  {
    id: '123126663123',
    time: new Date(2023, 8, 29, 18),
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
  },
  {
    id: '127777123123',
    time: new Date(2023, 8, 29, 19),
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
    },
    isFree: false,
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

export const PSYCHO = {
  name: 'Ирина',
  lastName: 'Кожевникова',
  id: '12345678907',
  dateOfBith: new Date(1990, 4, 23),
  img: avatar,
  freeSlots: [
    new Date(2023, 9, 25, 19),
    new Date(2023, 9, 28, 18),
    new Date(2023, 9, 28, 17),
    new Date(2023, 9, 29, 15),
    new Date(2023, 9, 29, 14),
    new Date(2023, 9, 29, 13),
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
  date: new Date(2023, 9, 25, 19),
  href: '/zoom',
};
