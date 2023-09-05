import React from 'react';
import '../App/App.css';
import { withRouter } from 'storybook-addon-react-router-v6';
import Welcome from './Welcome';
import homePageImg from '../../images/home_banner.svg';
import therapistPageImg from '../../images/for_therapist_banner.svg';

export default {
  title: 'Welcome page',
  component: Welcome,
  decorators: [
    withRouter,
    (Story) => (
      <div style={{ width: '1440px', height: '740px' }}>
        <Story />
      </div>
    ),
  ],
  controls: { sort: 'requiredFirst' },
  tags: ['autodocs'],
  argTypes: {
    animated: {
      type: 'boolean',
      description: 'Включает анимацию фона',
      defaultValue: true,
    },
    isLoggedIn: {
      type: 'boolean',
      description:
        'Отображает кнопку в header, в зависимости залогинен пользователь или нет',
      defaultValue: true,
    },
    imgLink: {
      type: 'string',
      name: 'Image link',
      description: 'Ссылка на изрбажение баннера',
      defaultValue: homePageImg,
      options: [homePageImg, therapistPageImg],
      control: {
        type: 'select',
      },
    },
    imgSize: {
      type: 'string',
      name: 'Image size',
      defaultValue: 'l',
      description: 'Размер изображения на баннере',
      options: ['l', 'm'],
      control: {
        type: 'inline-radio',
      },
    },
    imgAlt: {
      type: 'string',
      name: 'Image alt',
      defaultValue: 'Баннер',
    },
    title: {
      type: 'string',
      description: 'Заголовок баннера',
    },
    description: {
      type: 'string',
      description: 'Текстовый блок баннера',
    },
    textBtn: {
      name: 'Button label',
      type: 'string',
      description: 'Названее кнопки на банаре',
    },
  },
};

const Template = function Btn(args) {
  return <Welcome {...args} />;
};

export const Home = Template.bind({});
export const Therapist = Template.bind({});
Home.args = {
  animated: true,
  onClick: () => console.log('pressed'),
  imgLink: homePageImg,
  imgSize: 'l',
  title: 'Подберем психолога, который вам поможет',
  description:
    'Все психологи подтвердили образование,  прошли интервью и готовы оказать всю необходимую поддержку и помощь',
  textBtn: 'Подоборать психолога',
};

Therapist.args = {
  animated: false,
  onClick: () => console.log('pressed'),
  imgLink: therapistPageImg,
  imgSize: 'm',
  title: 'Присоединяйтесь к нашей команде психологов',
  description:
    'Поможем организовать вашу удаленную работу и сделаем ее комфортнее',
  textBtn: 'Подать заявку',
};
