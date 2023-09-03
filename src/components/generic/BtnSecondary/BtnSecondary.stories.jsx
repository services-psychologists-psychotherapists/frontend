import React from 'react';
import BtnSecondary from './BtnSecondary';
import '../../App/App.css';
import './BtnSecondary.css';

export default {
  title: 'Buttons/Button_secondary',
  component: BtnSecondary,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
      name: 'label',
      defaultValue: 'Войти',
    },
    type: {
      type: 'string',
      description: 'Тип кнопки',
      defaultValue: 'button',
      options: ['button', 'submit'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = function (args) {
  return <BtnSecondary {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Войти',
  disabled: false,
  type: 'button',
  onClick: () => console.log('pressed'),
};
