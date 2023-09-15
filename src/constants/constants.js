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

export const inputElement = 'input';
export const radioDropDown = 'radioDropDown';
export const checkboxDropDown = 'checkboxDropDown';

export const dropDownLists = {
  genderList: ['женский', 'мужской', 'другое'],
  approachList: [
    'Гештальт - терапия',
    'Экзистенциальный анализ',
    'Телесная терапия',
    'Панические атаки',
    'Другое',
  ],
};
