import instagramIcon from '../images/footer-icon-instagram.svg';
import telegramIcon from '../images/footer-icon-telegram.svg';
import vkIcon from '../images/footer-icon-vk.svg';
import stress from '../images/about_problem_stress.svg';
import relationship from '../images/about_problem_relationship.svg';
import yourself from '../images/about_problem_understand_yourself.svg';
import career from '../images/about_problem_career.svg';
import posttraumatic from '../images/about_problem_posttraumatic.svg';
import badHabits from '../images/about_problem_bad_habits.svg';
import closedEyeDisabled from '../images/Input/input-container__closed-eye_disabled.svg';
import openedEye from '../images/Input/input-container__opened-eye.svg';
import openedEyeError from '../images/Input/input-container__opened-eye_error.svg';
import closedEye from '../images/Input/input-container__closed-eye.svg';
import closedEyeError from '../images/Input/input-container__closed-eye_error.svg';
import arrow from '../images/Input/input-container__arrow.svg';
import arrowDisabled from '../images/Input/input-container__arrow_disabled.svg';
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
    descriptionStep: 'После проверки ваших данных, мы пришлем вам приглашение в личный кабинет',
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

export const SERVICE_DOCUMENTS = {
  default: [
    {
      text: 'Политика конфиденциальности',
    },
    {
      text: 'Условия использования сервиса',
    },
  ],
  whereby: [
    {
      text: 'Политикой конфиденциальности',
    },
    {
      text: 'Условиями использования сервиса',
    },
  ],
};

export const DROPDOWN_LINKS = [
  {
    text: 'Личный кабинет',
    link: '/client_account',
  },
];

export const INPUT_ICONS = {
  openedEye,
  closedEye,
  openedEyeError,
  closedEyeError,
  closedEyeDisabled,
  arrow,
  arrowDisabled,
};

// --------------FIELD_ELEMENTS--------------- //

export const inputElement = 'input-element';
export const radioDropDownElement = 'radio-dropdown-element';
export const checkboxDropDownElement = 'checkbox-dropdown-element';
export const titlesDropDownElement = 'titles-dropdown-element';

// --------------DROPDOWN_TYPES--------------- //

export const radioType = 'radio';
export const checkboxType = 'checkbox';

export const dropDownLists = {
  genderList: ['женский', 'мужской', 'другое'],
  approachList: [
    'Гештальт - терапия',
    'Экзистенциальный анализ',
    'Телесная терапия',
    'Панические атаки',
    'Другое',
  ],
  mainGoalsOfWork: [
    'Отношения с партнером',
    'Утрата',
    'Панические атаки',
    'Травмы и потери',
    'Разобраться в себе',
    'Депрессия',
    'Зависимости',
    'Самооценка',
    'Непонятные мысли',
    'Стресс',
    'Карьера',
    'Другое',
  ],
};
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
  description: 'Здесь будет отображаться последний специалист, с которым вы работали',
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

export const PSYCHOLOGIST_ACCOUNT_TITLES = {
  account: {
    pageTitle: 'Главная',
    calendarTitle: 'Календарь сессий',
    reminderTitle: 'Ближайшая сессия',
  },
  schedule: {
    pageTitle: 'Расписание',
    calendarTitle: '1. Выберите день',
    reminderTitle: '2. Добавьте доступное время сессии',
  },
  profile: {
    pageTitle: 'Профиль',
  },
};

export const SCROLL_SPEED = 1;
export const LENGTH_TO_START_SCROLLING = 5;

export const REGISTRATION_INPUT_PARAMS_FOR_CLIENT = [
  {
    element: inputElement,
    title: 'Имя (псевдоним)',
    name: 'name_regist',
    typeForInput: 'text',
    required: true,
  },
  {
    element: inputElement,
    title: 'Email',
    name: 'email_regist',
    typeForInput: 'email',
    required: true,
  },
  {
    element: inputElement,
    title: 'Телефон',
    name: 'phone_regist',
    typeForInput: 'text',
    required: false,
    placeholder: '+7 921 123 45 67',
  },
  {
    element: inputElement,
    title: 'Дата рождения',
    name: 'birthday_regist',
    typeForInput: 'text',
    required: true,
    placeholder: '23.04.1990',
  },
  {
    element: inputElement,
    title: 'Пароль',
    name: 'passowrd_regist',
    typeForInput: 'password',
    required: true,
    prompt:
      'Пароль должен содержать не менее 8 символов, буквы в верхнем и нижнем регистре, цифры и спец. символ',
  },
  {
    element: inputElement,
    title: 'Пароль',
    name: 'passowrd2_regist',
    typeForInput: 'password',
    required: true,
  },
];

export const AUTH_BTNS = {
  login: 'Войти в Личный кабинет',
  registration: 'Зарегистрироваться',
};

export const LOGIN_INPUT_PARAMS_FOR_CLIENT = [
  {
    element: inputElement,
    title: 'Email',
    name: 'email_login',
    typeForInput: 'email',
    required: true,
    minLength: '1',
  },
  {
    element: inputElement,
    title: 'Пароль',
    name: 'password_login',
    typeForInput: 'password',
    required: true,
    minLength: '1',
  },
];
