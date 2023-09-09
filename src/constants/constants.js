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
    numbKey: 1,
    content: 'image',
    imgPath: form,
  },
  {
    numbKey: 2,
    content: 'text',
    numberStep: '01',
    nameStep: 'Заполните заявку',
    descriptionStep:
      'От вас потребуются документы об образовании и подтверждающие квалификацию сертификаты',
  },
  {
    numbKey: 3,
    content: 'text',
    numberStep: '02',
    nameStep: 'Ожидайте подтверждения аккаунта',
    descriptionStep:
      'После проверки ваших данных, мы пришлем вам приглашение в личный кабинет',
  },
  {
    numbKey: 4,
    content: 'image',
    imgPath: clock,
  },
  {
    numbKey: 5,
    content: 'image',
    imgPath: girls,
  },
  {
    numbKey: 6,
    content: 'text',
    numberStep: '03',
    nameStep: 'Получайте новых клиентов',
    descriptionStep:
      'Расскажите о себе, установите ваше время работы и ожидайте записи к вам новых клиентов!',
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
