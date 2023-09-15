import avatar from '../images/avatar.png';

export const USER = {
  name: 'Ирина',
  lastName: 'Кожевникова',
  id: '12345678907',
  img: avatar,
};

export const PSYCHOLOGIST_ACCOUNT_LINKS = [
  {
    text: 'Главная',
    link: '/psychologist_account',
  },
  {
    text: 'Расписание',
    link: '/schedule',
  },
  {
    text: 'Профиль',
    link: '/profile',
  },
];

export const PSYCHOLOGIST_ACCOUNT_TEXT = {
  txtCalendarInMain: 'Календарь сессий',
  txtReminderInMain: 'Ближайшая сессия',
  txtCalendarInShedule: '1. Выберите день',
  txtReminderInShedule: '2. Добавьте доступное время сессии',
};
