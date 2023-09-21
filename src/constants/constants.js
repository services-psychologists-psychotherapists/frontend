import instagramIcon from '../images/footer-icon-instagram.svg';
import telegramIcon from '../images/footer-icon-telegram.svg';
import vkIcon from '../images/footer-icon-vk.svg';
import stress from '../images/about_problem_stress.svg';
import relationship from '../images/about_problem_relationship.svg';
import yourself from '../images/about_problem_understand_yourself.svg';
import career from '../images/about_problem_career.svg';
import posttraumatic from '../images/about_problem_posttraumatic.svg';
import badHabits from '../images/about_problem_bad_habits.svg';
import form from '../images/how_to_start_form.svg';
import clock from '../images/how_to_start_clock.svg';
import girls from '../images/how_to_start_talking_girls.svg';

export const NAVIGATION_LINKS = [
  {
    text: 'Каталог психологов',
    link: '/catalog',
  },
  {
    text: 'Психологам',
    link: '/for_a_therapist',
  },
];

export const CUSTOMER_PROBLEMS = [
  {
    problemNumber: '1',
    problemName: 'Справиться со стрессом, чувством тревоги, страха и паники',
    imgPath: stress,
    imgAlt: 'stress',
  },
  {
    problemNumber: '2',
    problemName: 'Преодолеть трудности в отношениях',
    imgPath: relationship,
    imgAlt: 'relationship',
  },
  {
    problemNumber: '3',
    problemName: 'Разобраться в себе, повысить самооценку',
    imgPath: yourself,
    imgAlt: 'yourself',
  },
  {
    problemNumber: '4',
    problemName: 'Определиться с планами на жизнь и построить карьеру',
    imgPath: career,
    imgAlt: 'career',
  },
  {
    problemNumber: '5',
    problemName: 'Справиться с эмоциями после травмирующих событий',
    imgPath: posttraumatic,
    imgAlt: 'posttraumatic',
  },
  {
    problemNumber: '6',
    problemName: 'Проработать зависимости и нежелательные привычки',
    imgPath: badHabits,
    imgAlt: 'badHabits',
  },
];

export const LIST_OF_STEPS = [
  {
    numberStep: '01',
    nameStep: 'Заполните заявку',
    descriptionStep:
      'От вас потребуются документы об образовании и подтверждающие квалификацию сертификаты',
    bgColor: 'white',
    imgPath: form,
    bgColorImg: 'light-violet',
    link: '',
  },
  {
    numberStep: '02',
    nameStep: 'Ожидайте подтверждения аккаунта',
    descriptionStep:
      'После проверки ваших данных, мы пришлем вам приглашение в личный кабинет',
    bgColor: 'white',
    imgPath: clock,
    bgColorImg: 'light-green',
    link: '',
  },
  {
    numberStep: '03',
    nameStep: 'Получайте новых клиентов',
    descriptionStep:
      'Расскажите о себе, установите ваше время работы и ожидайте записи к вам новых клиентов!',
    bgColor: 'white',
    imgPath: girls,
    bgColorImg: 'light-violet',
    link: '',
  },
];

export const CUSTOMER_STEPS = [
  {
    numberStep: '01',
    descriptionStep:
      'Выберите психолога через каталог, с помощью нужных фильтров. Все психологи подтвердили образование, прошли тест и интервью.',
    bgColor: 'white',
  },
  {
    numberStep: '02',
    descriptionStep:
      'Запишитесь к психологу на онлайн-сессию. Терапия с нами — это безопасно и конфиденциально.',
    bgColor: 'beige',
  },
  {
    numberStep: '03',
    descriptionStep:
      'Управляйте своим расписанием в личном кабинете. Удобно переносить и отменять сессии при необходимости.',
    bgColor: 'light-violet',
  },
];

export const EMERGENCY_SERVICES = [
  {
    number: '+7 495 989-50-50',
    service: 'Телефон горячей линии психологической помощи МЧС России',
  },
  {
    number: '+7 499 173-09-09',
    service: 'Московская служба психологической помощи населению',
  },
  {
    number: '+7 495 625-06-20',
    service: 'Независимая психиатрическая ассоциация России',
  },
];

export const SOCIAL_MEDIA_ICONS = [
  {
    path: vkIcon,
    alt: 'vk',
    href: 'https://vk.com/',
  },
  {
    path: instagramIcon,
    alt: 'instagram',
    href: 'https://www.instagram.com/',
  },
  {
    path: telegramIcon,
    alt: 'telegram',
    href: 'https://web.telegram.org/',
  },
];

export const SERVICE_DOCUMENTS = [
  'Политика конфиденциальности',
  'Условия использования сервиса',
];

export const DROPDOWN_LINKS = [
  {
    text: 'Личный кабинет',
    link: '/client_account',
  },
];

export const NUMBER_OF_DAYS_DISPLAYED = 13;
export const NUMBER_TO_SWITCH_THE_WEEKS = 14;
export const DAYS_OF_WEEK = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
export const DAYS_NAME = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

export const MONTH_NAME = [
  'январь',
  'вевраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
];

export const NOT_APPOINTMENT_MESSAGE = {
  client: {
    title: 'Сегодня сессий нет',
    description: 'Установите доступное время, чтобы клиент смог записаться',
    textBtn: 'Добавить свободное время',
  },
  psychologist: {
    title: 'Сессий пока не запланировано',
    description: 'Здесь будет отображаться ближайшая ваша сессия',
  },
};

export const NO_PSYCHO_MESSAGE = {
  title: 'Специалист пока не выбран',
  description:
    'Здесь будет отображаться последний специалист, с которым вы работали',
  textBtn: 'Подобрать психолога',
  href: '/catalog',
};

export const NO_SLOTS_MESSAGE = {
  today: {
    title: 'На выбранный день не установлено доступное время для сессий',
    href: '/shedule',
    textBtn: 'Перейти в расписание',
  },
  otherDay: {
    title: 'На сегодня не установлено доступное время для сессий',
    href: '/shedule',
    textBtn: 'Перейти в расписание',
  },
  noSlots: {
    title: 'Здесь появится список доступного времени, когда вы его установите',
  },
};

export const CLIENT_PROFILE_NAV_LINKS = [
  {
    text: 'Главная',
    link: '/client_account',
  },
  {
    text: 'Профиль',
    link: '/client_profile',
  },
];

export const DATE_FORMAT = 'DD.MM.YYYY hh:mm';
