import avatar from '../images/avatar.png';

export const SLOTS = [
  {
    id: '12777712422',
    time: '20.09.2023 12:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '123424323123',
    time: '23.09.2023 13:20',
    isFree: true,
  },
  {
    id: '127644123123',
    time: '20.09.2023 14:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '127777565123',
    time: '18.09.2023 15:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '128122343123',
    time: '19.09.2023 16:20',
    isFree: true,
    href: '/zoom',
  },
  {
    id: '127049123123',
    time: '18.09.2023 17:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '127777322123',
    time: '18.09.2023 18:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '127772353123',
    time: '18.09.2023 19:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '127773463123',
    time: '18.09.2023 20:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '122047123123',
    time: '18.09.2023 09:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '127054123123',
    time: '18.09.2023 10:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '121047123123',
    time: '18.09.2023 11:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    isFree: false,
    href: '/zoom',
  },
  {
    id: '1277730548923',
    time: '18.09.2023 08:20',
    patient: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
    },
    psycho: {
      name: 'Полина',
      lastName: 'Коновалова',
      id: '1234567890',
      avatar,
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
  slots: [...SLOTS],
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
