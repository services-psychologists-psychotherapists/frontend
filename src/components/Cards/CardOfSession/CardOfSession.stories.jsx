import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import CardOfSession from './CardOfSession';
import avatar from '../../../images/avatar.png';

export default {
  title: 'Card of session',
  component: CardOfSession,
  decorators: [withRouter],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: 'string',
      options: ['client', 'psycho'],
      control: {
        type: 'radio',
      },
      defaultValue: 'psycho',
    },
    session: {
      control: {
        type: 'object',
        keys: {
          client: {
            type: 'object',
            keys: {
              name: { type: 'string' },
              lastName: { type: 'string' },
              id: { type: 'string' },
              img: { type: 'string' },
              dateOfBith: { type: 'date' },
            },
          },
          psycho: {
            type: 'object',
            keys: {
              name: { type: 'string' },
              lastName: { type: 'string' },
              id: { type: 'string' },
              img: { type: 'string' },
              dateOfBith: { type: 'date' },
            },
          },
          date: { type: 'date' },
          href: { type: 'string' },
        },
      },
    },
    isFree: { type: 'boolean' },
  },
};

const Template = function Card(args) {
  return <CardOfSession {...args} />;
};

export const Psychologist = Template.bind({});
export const Client = Template.bind({});

Psychologist.args = {
  session: {
    client: {
      name: 'Ирина',
      lastName: 'Кожевникова',
      id: '12345678907',
      dateOfBith: new Date(1990, 4, 23),
      img: avatar,
    },
    psycho: {
      name: 'Ирина',
      lastName: 'Кожевникова',
      id: '12345678907',
      dateOfBith: new Date(1990, 4, 23),
      img: avatar,
    },
    date: new Date(2023, 9, 25, 19),
    href: '/zoom',
  },
};

Client.args = {
  session: {
    client: {
      name: 'Ирина',
      lastName: 'Кожевникова',
      id: '12345678907',
      dateOfBith: new Date(1990, 4, 23),
      img: avatar,
    },
    psycho: {
      name: 'Ирина',
      lastName: 'Кожевникова',
      id: '12345678907',
      dateOfBith: new Date(1990, 4, 23),
      img: avatar,
    },
    date: new Date(2023, 9, 25, 19),
    href: '/zoom',
  },
  type: 'client',
};
