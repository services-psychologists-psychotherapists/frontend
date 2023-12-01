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

export const HEADER_DROPDOWN_LINKS = [
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
export const HEADER_BURGER_MENU_LINKS = [...HEADER_DROPDOWN_LINKS, ...HEADER_NAV_LINKS];

export const SCREEN_SM = 480;
export const SCREEN_MD = 768;

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
    promptClasses: 'auth__prompt',
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
    promptClasses: 'auth__prompt',
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
    placeholder: 'Выберите все подходящие варианты',
    title: 'Основные направления работы',
    dropdownContent: dropdownLists.approachList,
    typeForDropdown: 'checkbox',
    required: false,
    customElement: 'Другой вариант',
    autoComplete: 'off',
  },
];

export const INPUT_DATA_FOR_RESET_PASSWORD = [
  {
    element: inputElement,
    title: 'Email',
    name: 'email_change_password',
    typeForInput: 'email',
    required: true,
    minLength: '1',
    disabled: true,
    placeholder: 'example@mail.ru',
  },
  {
    element: inputElement,
    title: 'Введите текущий пароль',
    name: 'old_password_change_password',
    typeForInput: 'password',
    required: true,
    minLength: '1',
  },
  {
    element: inputElement,
    title: 'Придумайте новый пароль',
    name: 'new_password_change_password',
    typeForInput: 'password',
    required: true,
    minLength: '1',
    prompt:
      'Пароль должен содержать не менее 8 символов, буквы в верхнем и нижнем регистре, цифры и спец. символ',
    promptClasses: 'change-password__prompt',
    fieldsetClasses: 'change-password__fieldset',
  },
  {
    element: inputElement,
    title: 'Повторите новый пароль',
    name: 'new2_password_change_password',
    typeForInput: 'password',
    required: true,
    minLength: '1',
  },
];

export const API_URL = 'https://sharewithme.site/api/v1';

export const PSYCHO_REGISTRATION_TEXT = [
  'Для регистрации заполните информацию о себе и прикрепите документы об образовании.',
  'Как только мы все проверим, Вам на почту придет уведомление.',
];

export const PSYCHO_REGISTRATION_FIRST_STEP = [
  {
    element: inputElement,
    title: 'Имя',
    name: 'first_name',
    typeForInput: 'text',
    required: true,
    maxLength: '50',
    minLength: '1',
  },
  {
    element: inputElement,
    title: 'Фамилия',
    name: 'last_name',
    typeForInput: 'text',
    required: true,
    maxLength: '50',
    minLength: '1',
  },
  {
    element: inputElement,
    title: 'Email',
    name: 'email',
    typeForInput: 'email',
    required: true,
    promptClasses: 'auth__prompt',
    minLength: '1',
  },
  {
    element: inputElement,
    title: 'Телефон',
    name: 'phone_number',
    typeForInput: 'tel',
    required: true,
    placeholder: '+7 921 123 45 67',
    maxLength: '12',
    minLength: '1',
  },
  {
    element: inputElement,
    title: 'Дата рождения',
    name: 'birthday',
    typeForInput: 'date',
    required: true,
    placeholder: '23.04.1990',
  },
  {
    element: radioDropdownElement,
    name: 'gender',
    placeholder: 'Выберите пол',
    title: 'Пол',
    dropdownContent: dropdownLists.genderForPsycho,
    typeForDropdown: 'radio',
    autoComplete: 'off',
    // required: true,
  },
];

export const PSYCHO_REGISTRATION_SECOND_STEP = [
  {
    element: inputElement,
    title: 'Период обучения',
    name: 'institutes_graduation_year',
    typeForInput: 'text',
    required: true,
    placeholder: 'Год начала - год окончания',
  },
  {
    element: inputElement,
    title: 'Название учебного заведения',
    name: 'institutes_title',
    typeForInput: 'text',
    required: true,
    placeholder: 'Введите название учебного заведения',
  },
  {
    element: inputElement,
    title: 'Направление подготовки',
    name: 'institutes_speciality',
    typeForInput: 'text',
    required: true,
  },
];

export const PSYCHO_REGISTRATION_THIRD_STEP = [
  {
    element: inputElement,
    title: 'Год окончания',
    name: 'courses_graduation_year',
    typeForInput: 'number',
    required: true,
  },
  {
    element: inputElement,
    title: 'Название учебного заведения',
    name: 'courses_title',
    typeForInput: 'text',
    required: true,
    placeholder: 'Введите название учебного заведения',
  },
  {
    element: inputElement,
    title: 'Направление подготовки',
    name: 'courses_speciality',
    typeForInput: 'text',
    required: true,
  },
];

export const PSYCHO_REGISTRATION_FOURTH_STEP = [
  {
    element: titlesDropdownElement,
    name: 'themes',
    placeholder: 'Выберите все подходящие варианты',
    title: 'Основные направления работы',
    dropdownContent: dropdownLists.mainGoalsOfWork,
    typeForDropdown: 'checkbox',
    // required: true,
    autoComplete: 'off',
  },
  {
    element: checkboxDropdownElement,
    name: 'approaches',
    placeholder: 'Выберите все подходящие варианты',
    title: 'Подход',
    dropdownContent: dropdownLists.approachList,
    typeForDropdown: 'checkbox',
    // required: true,
    customElement: 'Другой вариант',
    autoComplete: 'off',
  },
];

export const PSYCHO_REGISTRATION_FOURTH_STEP_TWO = [
  {
    element: inputElement,
    title: 'Стоимость за сессию (руб.)',
    name: 'price',
    typeForInput: 'number',
    required: true,
    inputContainerClasses: 'psycho-registration__form_price-container',
  },
  {
    element: inputElement,
    title: 'Опыт консультирования (в годах)',
    name: 'experience',
    typeForInput: 'number',
    required: true,
    inputContainerClasses: 'psycho-registration__form_experience-container',
  },
];

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
          onClick: () => console.log('Нажали Нет'),
          type: 'button',
          size: 'l',
          variant: 'secondary',
        },
        {
          label: 'Да',
          onClick: () => console.log('Нажали Да'),
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
          onClick: () => console.log('Нажали Отменить'),
          type: 'secondary',
          size: 'l',
          variant: 'secondary',
        },
        {
          label: 'Отмена',
          onClick: () => console.log('Нажали Добавить'),
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
  }
};
