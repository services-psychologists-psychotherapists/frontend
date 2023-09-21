import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import MyPsychologist from './MyPsychologist';
import { PSYCHO } from '../../../constants/db';

export default {
  title: 'Global components/Cards/My Psychologist',
  component: MyPsychologist,
  decorators: [withRouter],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    psychologist: {
      description: 'Объект с данными выбранного психолога клиента',
      control: false,
    },
    nextSession: {
      type: 'object',
      description:
        'В зависимости от того запланирована ли следующая сессия, меняет вариант кнопки',
    },
  },
};

const Template = function Card(args) {
  return <MyPsychologist {...args} />;
};

export function Psychologist() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <MyPsychologist psychologist={PSYCHO} />
      <MyPsychologist psychologist={PSYCHO} nextSession={{}} />
    </div>
  );
}
export const PsychologistEmpty = Template.bind({});

Psychologist.args = {
  psychologist: PSYCHO,
};

PsychologistEmpty.args = {
  psychologist: null,
};

export function YourPsychologist() {
  return <MyPsychologist psychologist={PSYCHO} />;
}
