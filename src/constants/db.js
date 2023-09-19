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
SLOT_2.datetime_from = '20.09.2023 19:20';
SLOT_2.datetime_to = '20.09.2023 20:10';

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
};
