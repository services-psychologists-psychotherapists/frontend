import React from 'react';
import Button from './Button';
import '../../App/App.css';
import './Button.css';

export default {
  title: 'Button',
  component: Button,
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
    variant: {
      type: 'string',
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
      },
    },
    size: {
      type: 'string',
      defaultValue: 'l',
      options: ['l', 'm'],
      control: {
        type: 'inline-radio',
      },
    },
  },
};

const Template = function Btn(args) {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Войти',
  disabled: false,
  type: 'button',
  onClick: () => console.log('pressed'),
  variant: 'secondary',
};
Primary.args = {
  children: 'Подобрать психолога',
  disabled: false,
  type: 'button',
  onClick: () => console.log('pressed'),
  variant: 'primary',
};
