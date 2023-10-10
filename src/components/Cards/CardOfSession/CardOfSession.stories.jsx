import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import CardOfSession from './CardOfSession';
import clientAvatar from '../../../images/client_avatar.png';
import psychologistAvatar from '../../../images/psychologist_avatar.png';

export default {
  title: 'Global components/Cards/Card of session',
  component: CardOfSession,
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: 'string',
      options: ['client', 'psychologist'],
      control: {
        type: 'radio',
      },
      defaultValue: 'client',
    },
    session: {
      type: 'object',
      control: {
        defaultValue: null,
        keys: {
          client: {
            type: 'object',
            keys: {
              first_name: { type: 'string' },
              last_name: { type: 'string' },
              id: { type: 'string' },
              avatar: { type: 'string' },
            },
          },
          psychologist: {
            type: 'object',
            keys: {
              first_name: { type: 'string' },
              last_name: { type: 'string' },
              id: { type: 'string' },
              avatar: { type: 'string' },
            },
          },
          datetime_from: { type: 'string' },
          datetime_to: { type: 'string' },
          href: { type: 'string' },
        },
      },
    },
  },
};

function Template(args) {
  return (
    <div style={{ width: '900px' }}>
      <CardOfSession {...args} />
    </div>
  );
}

export const Psychologist = Template.bind({});
export const PsychologistEmpty = Template.bind({});
export const Client = Template.bind({});
export const ClientEmpty = Template.bind({});

Client.args = {
  session: {
    client: {
      first_name: 'Полина',
      last_name: 'Коновалова',
      id: '12345678907',
      avatar: clientAvatar,
    },
    datetime_from: '18.09.2023 19:20',
    datetime_to: '18.09.2023 20:10',
    href: '/zoom',
  },
};

Psychologist.args = {
  session: {
    psychologist: {
      first_name: 'Ирина',
      last_name: 'Кожевникова',
      id: '12345678907',
      avatar: psychologistAvatar,
    },
    datetime_from: '18.09.2023 19:20',
    datetime_to: '18.09.2023 20:10',
    href: '/zoom',
  },
  type: 'psychologist',
};

PsychologistEmpty.args = {
  session: null,
  type: 'psychologist',
};

ClientEmpty.args = {
  session: null,
};
