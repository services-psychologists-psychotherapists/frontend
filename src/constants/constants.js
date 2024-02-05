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
import wallet from '../images/wallet_icon.svg';
import setting from '../images/setting_icon.svg';
import people from '../images/people_icon.svg';
import checkEmailImage from '../images/check-email.svg';

// eslint-disable-next-line no-useless-escape
export const EMAIL_REGEX = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
export const PHONE_REGEX = /^\+?\d{0,12}$/;
export const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
// eslint-disable-next-line no-useless-escape
export const INSTITUTES_GRADUATION_YEAR_REGEX = /^(\d{0,4}([\-|\s]?\d{0,4})?)$/;
// eslint-disable-next-line no-useless-escape
export const INSTITUTES_GRADUATION_YEAR_TEST_REGEX = /^\d{4}[\-\s]\d{4}$/;
export const COURSES_GRADUATION_YEAR_REGEX = /^\d{0,4}$/;
export const COURSES_GRADUATION_YEAR_TEST_REGEX = /^\d{4}$/;
export const PRICE_REGEX = /^\d{0,5}$/;
export const EXPERIENCE_REGEX = /^\d{0,2}$/;
export const EMAIL_ERROR_VALIDATION = 'Почта должна быть формата pochta@yandex.ru.';
export const PASSWORD_ERROR_VALIDATION = 'Пароль должен содержать не менее 8 символов, буквы в верхнем и нижнем регистре, цифры и спец. символ';
export const PHONE_ERROR_VALIDATION = 'Введите номер телефона в формате вашего региона.';
export const DATE_ERROR_VALIDATION = 'Введите дату в формате ДД.ММ.ГГГГ.';
export const INSTITUTES_GRADUATION_YEAR_ERROR = 'Укажите период. Пример: 2015-2020';
export const COURSES_GRADUATION_YEAR_ERROR = 'Укажите год окончания. Пример: 2020';
export const COURSES_TITLE_ERROR = 'Укажите название учебного заведения';
export const COURSES_SPECIALITY_ERROR = 'Укажите направление подготовки';
export const PRICE_ERROR = 'Укажите сумму в рублях. Пример: 4900';
export const EXPERIENCE_ERROR = 'Укажите опыт в годах. Пример: 5';
export const NUMBER_OF_PSYCHO_DISPLAYED = 5;
export const NUMBER_OF_PAGES_DISPLAYED = 3;
export const PASSWORD_PROMPT = 'Пароль должен содержать не менее 8 символов, буквы в верхнем и нижнем регистре, цифры и спец. символ.';
export const FILE_UPLOAD_ERROR = 'Можно отправить только pdf и jpg файлы размером до 3 МБ';

export const CUSTOMER_PROBLEMS = [
  {
    problemName: 'Справиться со стрессом, чувством тревоги, страха и паники',
    imgPath: stress,
    imgAlt: 'Стресс',
  },
  {
    problemName: 'Преодолеть трудности в отношениях',
    imgPath: relationship,
    imgAlt: 'Отношения',
  },
  {
    problemName: 'Разобраться в себе, повысить самооценку',
    imgPath: yourself,
    imgAlt: 'Самооценка',
  },
  {
    problemName: 'Определиться с планами на жизнь и построить карьеру',
    imgPath: career,
    imgAlt: 'Карьера',
  },
  {
    problemName: 'Справиться с эмоциями после травмирующих событий',
    imgPath: posttraumatic,
    imgAlt: 'Травмы',
  },
  {
    problemName: 'Проработать зависимости и нежелательные привычки',
    imgPath: badHabits,
    imgAlt: 'Привычки',
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
    link: '/psychologists_registration',
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
  },
  {
    numberStep: '02',
    descriptionStep:
      'Запишитесь к психологу на онлайн-сессию. Терапия с нами — это безопасно и конфиденциально.',
  },
  {
    numberStep: '03',
    descriptionStep:
      'Управляйте своим расписанием в личном кабинете. Удобно переносить и отменять сессии при необходимости.',
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
export const radioDropdownElement = 'radio-dropdown-element';
export const checkboxDropdownElement = 'checkbox-dropdown-element';
export const titlesDropdownElement = 'titles-dropdown-element';

// --------------DROPDOWN_TYPES--------------- //

export const radioType = 'radio';
export const checkboxType = 'checkbox';

export const dropdownLists = {
  genderList: ['Женский', 'Мужской', 'Другое'],
  genderForFilter: ['Женский', 'Мужской', 'Не важно'],
  genderForPsycho: ['Женский', 'Мужской'],
  experience: ['1-3 года', '4-6 лет', '7-10 лет', '10 и более'],
  ageForFilter: ['25-30 лет', '31-40 лет', '41-50 лет', '51-60 лет', '60 лет и более'],
  approachList: [
    'Гештальт - терапия',
    'Экзистенциальный анализ',
    'Психоаналитическая терапия',
    'Телесная терапия',
    'Панические атаки',
    'Другой вариант',
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
export const TIMING_HOURS = [
  '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '20', '21', '22', '23',
];

export const TIMING_MINUTES = [
  '00', '05', '10', '15', '20', '25', '30',
  '35', '40', '45', '50', '55',
];

export const CARD_OF_SESSION_MESSAGE = {
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
    text: 'Личный кабинет',
    link: '/client_account',
  },
  {
    text: 'Профиль',
    link: '/client_profile',
  },
];

export const DATE_FORMAT = 'DD.MM.YYYY HH:mm';

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

export const HEADER_NAV_LINKS = [
  {
    text: 'Каталог психологов',
    link: '/directory_psychologists',
  },
  {
    text: 'Психологам',
    link: '/for_a_therapist',
  },
];

export const SCREEN_SM = 480;
export const SCREEN_MD = 768;

export const SCROLL_WIDTH_FOR_PSYCHO_PAGE = 1175;

export const SCROLL_SPEED = 1;
export const LENGTH_TO_START_SCROLLING = 5;

export const REGISTRATION_INPUT_PARAMS_FOR_CLIENT = [
  {
    element: inputElement,
    title: 'Имя (псевдоним)',
    name: 'name',
    typeForInput: 'text',
    required: true,
    placeholder: 'Введите имя',
    maxLength: '15',
    minLength: '1',
  },
  {
    element: inputElement,
    title: 'Email',
    name: 'email',
    typeForInput: 'email',
    required: true,
    placeholder: 'Введите email',
    pattern: EMAIL_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Телефон',
    name: 'phone_number',
    typeForInput: 'text',
    required: false,
    placeholder: '+79211234567',
    minLength: '1',
    maxLength: '12',
    pattern: PHONE_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Дата рождения',
    name: 'birthday',
    typeForInput: 'date',
    required: true,
    placeholder: '23.04.1990',
    pattern: DATE_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Пароль',
    name: 'password',
    typeForInput: 'password',
    required: true,
    prompt: PASSWORD_PROMPT,
    placeholder: 'Введите пароль',
    minLength: '8',
    pattern: PASSWORD_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Пароль',
    name: 'password_2',
    typeForInput: 'password',
    required: true,
    placeholder: 'Повторите пароль',
    minLength: '8',
    pattern: PASSWORD_REGEX.toString().slice(1, -1),
    promptClasses: 'registration__prompt',
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
    name: 'email',
    typeForInput: 'email',
    required: true,
    minLength: '1',
    placeholder: 'Введите email',
    pattern: EMAIL_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Пароль',
    name: 'password',
    typeForInput: 'password',
    required: true,
    minLength: '1',
    placeholder: '***********',
    pattern: PASSWORD_REGEX.toString().slice(1, -1),
    promptClasses: 'login__prompt',
  },
];

export const PSYCHOLOGIST_INFO_TITLES = {
  about: 'О себе',
  experience: 'Опыт работы',
  themes: 'С чем работает',
  aproaches: 'Подход в работе',
  institutes: 'Высшее образование',
  courses: 'Повышение квалификации',
};

export const PSYCHO_FILTER_DATA = [
  {
    element: radioDropdownElement,
    name: 'experience',
    placeholder: 'Выберите опыт работы',
    title: 'Опыт работы',
    dropdownContent: dropdownLists.experience,
    typeForDropdown: 'radio',
    required: false,
    autoComplete: 'off',
  },
  {
    element: radioDropdownElement,
    name: 'gender',
    placeholder: 'Выберите пол',
    title: 'Пол',
    dropdownContent: dropdownLists.genderForFilter,
    typeForDropdown: 'radio',
    required: false,
    autoComplete: 'off',
  },
  {
    element: radioDropdownElement,
    name: 'age',
    placeholder: 'Выберите возраст психолога',
    title: 'Возраст',
    dropdownContent: dropdownLists.ageForFilter,
    typeForDropdown: 'radio',
    required: false,
    autoComplete: 'off',
  },
  {
    element: titlesDropdownElement,
    name: 'themes',
    placeholder: 'Выберите все подходящие варианты',
    title: 'О чем хотите поговорить?',
    dropdownContent: dropdownLists.mainGoalsOfWork,
    typeForDropdown: 'checkbox',
    required: false,
    autoComplete: 'off',
  },
  {
    element: checkboxDropdownElement,
    name: 'approaches',
    placeholder: 'Выберите подходящее',
    title: 'Основные направления работы',
    dropdownContent: dropdownLists.approachList,
    typeForDropdown: 'checkbox',
    required: false,
    customElement: 'Другой вариант',
    autoComplete: 'off',
  },
];

export const INPUT_DATA_FOR_CHANGE_PASSWORD = [
  {
    element: inputElement,
    title: 'Email',
    name: 'email',
    typeForInput: 'email',
    required: true,
    minLength: '1',
    disabled: true,
    placeholder: 'example@mail.ru',
    pattern: EMAIL_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Введите текущий пароль',
    name: 'old_password',
    typeForInput: 'password',
    required: true,
    minLength: '1',
    pattern: PASSWORD_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Придумайте новый пароль',
    name: 'password',
    typeForInput: 'password',
    required: true,
    minLength: '8',
    prompt: PASSWORD_PROMPT,
    fieldsetClasses: 'change-password__fieldset',
    pattern: PASSWORD_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Повторите новый пароль',
    name: 'password_2',
    typeForInput: 'password',
    required: true,
    minLength: '8',
    pattern: PASSWORD_REGEX.toString().slice(1, -1),
  },
];

export const INPUT_DATA_FOR_SET_PASSWORD = [
  {
    element: inputElement,
    title: 'Придумайте пароль',
    placeholder: 'Введите пароль',
    name: 'password',
    typeForInput: 'password',
    required: true,
    minLength: '8',
    prompt: PASSWORD_PROMPT,
    fieldsetClasses: 'create-password__fieldset',
    pattern: PASSWORD_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Повторите пароль',
    placeholder: 'Введите пароль повторно',
    name: 'password_2',
    typeForInput: 'password',
    required: true,
    minLength: '8',
    pattern: PASSWORD_REGEX.toString().slice(1, -1),
  },
];

export const API_URL = 'https://sharewithme.site/api/v1';

export const PSYCHO_REGISTRATION_TEXT = [
  'Для регистрации заполните информацию о себе и прикрепите документы об образовании.',
  'Как только мы все проверим, Вам на почту придет уведомление.',
];

// -------------------Для шагов регистрации психолога-------------------------

export const PSYCHO_REGISTRATION_FIRST_STEP = [
  {
    element: inputElement,
    title: 'Имя',
    name: 'first_name',
    typeForInput: 'text',
    required: true,
    maxLength: '15',
    minLength: '1',
    placeholder: 'Введите имя',
  },
  {
    element: inputElement,
    title: 'Фамилия',
    name: 'last_name',
    typeForInput: 'text',
    required: true,
    maxLength: '15',
    minLength: '1',
    placeholder: 'Введите фамилию',
  },
  {
    element: inputElement,
    title: 'Email',
    name: 'email',
    typeForInput: 'email',
    required: true,
    minLength: '1',
    placeholder: 'Введите email',
    pattern: EMAIL_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Телефон',
    name: 'phone_number',
    typeForInput: 'tel',
    required: true,
    placeholder: '+79211234567',
    maxLength: '12',
    minLength: '1',
    pattern: PHONE_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Дата рождения',
    name: 'birthday',
    typeForInput: 'date',
    required: true,
    placeholder: '23.04.1990',
    pattern: DATE_REGEX.toString().slice(1, -1),
  },
  {
    element: radioDropdownElement,
    name: 'gender',
    placeholder: 'Выберите пол',
    title: 'Пол',
    dropdownContent: dropdownLists.genderForPsycho,
    typeForDropdown: 'radio',
    autoComplete: 'off',
    required: true,
    isChangeFocus: true,
  },
];

export const PSYCHO_REGISTRATION_SECOND_STEP = [
  {
    item: 'Fieldset',
    element: inputElement,
    title: 'Период обучения',
    name: 'institutes_graduation_year',
    typeForInput: 'text',
    required: true,
    placeholder: 'Введите год начала - год окончания',
    inputContainerClasses: 'data-list__graduation-year',
    pattern: INSTITUTES_GRADUATION_YEAR_TEST_REGEX.toString().slice(1, -1),
    maxLength: '9',
  },
  {
    item: 'Textarea',
    id: 'institute',
    element: inputElement,
    title: 'Название учебного заведения',
    name: 'institutes_title',
    textareaClassName: 'data-list__text',
    required: true,
    placeholder: 'Введите название учебного заведения',
    maxLength: '200',
    minLength: '1',
  },
  {
    item: 'Textarea',
    id: 'speciality',
    element: inputElement,
    title: 'Направление подготовки',
    name: 'institutes_speciality',
    textareaClassName: 'data-list__text',
    typeForInput: 'text',
    required: true,
    placeholder: 'Введите название направления подготовки',
    maxLength: '50',
    minLength: '1',
  },
];

export const PSYCHO_REGISTRATION_THIRD_STEP = [
  {
    item: 'Fieldset',
    element: inputElement,
    title: 'Год окончания',
    name: 'courses_graduation_year',
    typeForInput: 'text',
    placeholder: 'Введите год окончания',
    inputContainerClasses: 'data-list__graduation-year',
    pattern: COURSES_GRADUATION_YEAR_TEST_REGEX.toString().slice(1, -1),
    maxLength: '4',
  },
  {
    item: 'Textarea',
    element: inputElement,
    title: 'Название учебного заведения',
    name: 'courses_title',
    textareaClassName: 'data-list__text',
    typeForInput: 'text',
    placeholder: 'Введите название учебного заведения',
    maxLength: '200',
    minLength: '1',
  },
  {
    item: 'Textarea',
    element: inputElement,
    title: 'Направление подготовки',
    name: 'courses_speciality',
    textareaClassName: 'data-list__text',
    typeForInput: 'text',
    placeholder: 'Введите направление подготовки',
    maxLength: '50',
    minLength: '1',
  },
];

export const PSYCHO_REGISTRATION_FOURTH_STEP_ONE = [
  {
    element: titlesDropdownElement,
    name: 'themes',
    placeholder: 'Выберите подходящее',
    title: 'Основные направления работы',
    dropdownContent: dropdownLists.mainGoalsOfWork,
    typeForDropdown: 'checkbox',
    autoComplete: 'off',
    classesForInput: 'data-list__four-step_themes',
  },
  {
    element: checkboxDropdownElement,
    name: 'approaches',
    placeholder: 'Выберите подходящее',
    title: 'Подход',
    dropdownContent: dropdownLists.approachList,
    typeForDropdown: 'checkbox',
    required: true,
    customElement: 'Другой вариант',
    autoComplete: 'off',
    classesForInput: 'data-list__four-step_themes',
  },
];

export const PSYCHO_REGISTRATION_FOURTH_STEP_TWO = [
  {
    element: inputElement,
    title: 'Стоимость за сессию (руб.)',
    name: 'price',
    typeForInput: 'number',
    required: true,
    inputContainerClasses: 'data-list__price',
    placeholder: '3000',
    maxLength: '6',
    minLength: '1',
    pattern: PRICE_REGEX.toString().slice(1, -1),
  },
  {
    element: inputElement,
    title: 'Опыт консультирования (в годах)',
    name: 'experience',
    typeForInput: 'number',
    required: true,
    inputContainerClasses: 'data-list__experience',
    placeholder: '5',
    maxLength: '3',
    minLength: '1',
    pattern: EXPERIENCE_REGEX.toString().slice(1, -1),
  },
];

// ----------------------------------------------------------------------------------

export const PROFILE_FIELDS = [
  {
    disabled: true,
    title: 'Логин',
    text: 'example@mail.ru',
  },
  {
    disabled: false,
    title: 'Пароль',
    text: '***********',
  }
];

export const WORK_WITH_US = [
  {
    id: 1,
    title: 'Современный, быстроразвивающийся сервис с постоянным потоком клиентов',
    icon: people
  },
  {
    id: 2,
    title: 'Понятная система оплаты',
    icon: wallet
  },
  {
    id: 3,
    title: 'Мы берем на себя все технические вопросы',
    icon: setting
  }
];

export const POPUP_DATA = {
  ConfirmDeletePopup: {
    data: {
      title: 'Удалить?',
      buttons: [
        {
          label: 'Нет',
          onClick: () => {},
          type: 'button',
          size: 'l',
          variant: 'secondary',
        },
        {
          label: 'Да',
          onClick: () => {},
          type: 'button',
          size: 'l',
          variant: 'primary',
        },
      ],
    },
  },
  deleteFreeSlot: {
    data: {
      title: 'Вы уверены, что хотите удалить из расписания свободное время?',
      buttons: [
        {
          label: 'Удалить',
          onClick: () => {},
          type: 'secondary',
          size: 'l',
          variant: 'secondary',
        },
        {
          label: 'Отмена',
          onClick: () => {},
          type: 'primary',
          size: 'l',
          variant: 'primary',
        },
      ],
    },
  },
  changePassword: {
    data: {
      title: 'Хотите изменить пароль?',
      buttons: [
        {
          label: 'Отменить',
          onClick: () => {},
          type: 'button',
          size: 'l',
          variant: 'secondary',
        },
        {
          label: 'Да',
          onClick: () => {},
          type: 'button',
          size: 'l',
          variant: 'primary',
          href: '/change_password',
        },
      ],
    },
  },
  avatar: {
    data: {
      title: 'Загрузка новой фотографии',
      text: 'Клиентам будет проще узнать вас, если вы загрузите свою настоящую фотографию.',
      buttons: [
        {
          label: 'Отменить',
          onClick: () => {},
          type: 'button',
          size: 'l',
          variant: 'secondary',
        },
        {
          label: 'Выбрать файл',
          type: 'button',
          size: 'l',
          variant: 'primary',
        },
      ],
    },
  },
  header: {
    data: {
      title: 'Вы точно хотите выйти?',
      buttons: [
        {
          label: 'Отменить',
          onClick: () => {},
          type: 'button',
          size: 'l',
          variant: 'secondary',
        },
        {
          label: 'Выйти',
          type: 'button',
          size: 'l',
          variant: 'primary',
        },
      ],
    },
  },
  deleteSession: {
    data: {
      title: 'Вы уверены, что хотите отменить сессию?',
      text: 'Оплата вернется только при отмене сессии не позднее чем за 12 часов до начала',
      buttons: [
        {
          label: 'Назад',
          onClick: () => {},
          type: 'button',
          size: 'l',
          variant: 'secondary',
        },
        {
          label: 'Отменить сессию',
          type: 'button',
          size: 'l',
          variant: 'primary',
        },
      ],
    },
  },
  deleteSlot: {
    data: {
      title: 'Вы уверены, что хотите удалить из расписания свободное время?',
      buttons: [
        {
          label: 'Отмена',
          onClick: () => {},
          type: 'button',
          size: 'l',
          variant: 'secondary',
        },
        {
          label: 'Удалить',
          type: 'button',
          size: 'l',
          variant: 'primary',
        },
      ],
    },
  },
};

export const CHECK_EMAIL_DATA = {
  title: 'Подтвердите свой E-mail',
  text: 'Мы прислали Вам письмо на указанную электронную почту. Пройдите, пожалуйста, по ссылке для подтверждения почты.',
  image: checkEmailImage,
  buttonText: 'На страницу входа',
  buttonHref: '/signin'
};

export const PSYCHO_ACCOUNT_TIMEPICKER = [
  {
    element: radioDropdownElement,
    typeForDropdown: 'radio',
    dropdownContent: TIMING_HOURS,
    required: false,
    autoComplete: 'off',
    name: 'hours',
  },
  {
    element: radioDropdownElement,
    typeForDropdown: 'radio',
    dropdownContent: TIMING_MINUTES,
    required: false,
    autoComplete: 'off',
    name: 'minutes',
  },
];
