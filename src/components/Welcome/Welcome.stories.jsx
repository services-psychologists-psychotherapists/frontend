import React from 'react';
import '../App/App.css';
import { withRouter } from 'storybook-addon-react-router-v6';
import Welcome from './Welcome';
import homePageImg from '../../images/home_banner.svg';
import therapistPageImg from '../../images/for_therapist_banner.svg';
import Banner from '../Banner/Banner';

export default {
  title: 'Welcome page',
  component: Welcome,
  decorators: [withRouter],
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
      description: 'Отображает кнопку в header, в зависимости залогинен пользователь или нет',
      defaultValue: true,
    },
    children: {
      description: 'Содержание приветственной страницы',
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
  children: (
    <Banner
      description="Все психологи подтвердили образование,  прошли интервью и готовы оказать всю необходимую поддержку и помощь"
      imgLink={homePageImg}
      imgSize="l"
      onClick={() => {}}
      textBtn="Подоборать психолога"
      title="Подберем психолога, который вам поможет"
    />
  ),
};

Therapist.args = {
  animated: false,
  children: (
    <Banner
      description="Поможем организовать вашу удаленную работу и сделаем ее комфортнее"
      imgLink={therapistPageImg}
      imgSize="m"
      onClick={() => {}}
      textBtn="Подать заявку"
      title="Присоединяйтесь к нашей команде психологов"
    />
  ),
};
