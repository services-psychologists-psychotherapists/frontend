import React from 'react';
import '../App/App.css';
import './MiniPsychoCard.css';
import MiniPsychoCard from './MiniPsychoCard';
import avatar from '../../images/avatar.png';

export default {
  title: 'MiniPsychoCard',
  component: MiniPsychoCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '588px', height: '192px', margin: '0 150px 100px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    cardClasses: {
      type: 'string',
      description: 'Дополнительный класс для работы с окружением',
      control: false,
    },
    experience: {
      type: 'number',
      description: 'Опыт психолога',
      control: {
        type: 'number',
      },
    },
    avatar: {
      type: 'string',
      description: 'Аватар психолога',
      control: false,
    },
    firstName: {
      type: 'string',
      description: 'Имя психолога',
      control: {
        type: 'text',
      },
    },
    lastName: {
      type: 'string',
      description: 'Фамилия психолога',
      control: {
        type: 'text',
      },
    },
  },
};

function Template(args) {
  return <MiniPsychoCard {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  cardClasses: '',
  experience: 2,
  avatar,
  firstName: 'Ирина',
  lastName: 'Кожевникова',
};
