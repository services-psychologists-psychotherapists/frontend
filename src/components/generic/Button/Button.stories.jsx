import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Button from './Button';
import './Button.css';

export default {
  title: 'Global components/Button/Button',
  component: Button,
  decorators: [withRouter],

  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
      name: 'label',
      control: 'text',
    },
    type: {
      type: 'string',
      description: 'Тип кнопки',
      defaultValue: 'button',
      options: ['button', 'submit'],
      control: {
        type: 'radio',
      },
      if: { arg: 'href', truthy: false },
    },
    variant: {
      type: 'string',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'text', 'text-icon'],
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
    href: {
      type: 'string',
      description:
        'При установке значения `<button>` заменяется на `<a>`. Пропсы type и onClick становятся недоступны',
      control: 'text',
    },
    onClick: {
      type: 'func',
      description:
        'При установке значения `<a>` заменяется на `<button>`. Пропс href становится недоступным',
      control: false,
      if: { arg: 'href', truthy: false },
    },
    className: {
      type: 'string',
      description: 'Дает возможность добавить дополнительный класс для установки месторасположения',
      control: false,
    },
    disabled: {
      type: 'bool',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

function Template(args) {
  return <Button {...args} />;
}

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Text = Template.bind({});
export const TextIcon = Template.bind({});

Secondary.args = {
  children: 'Войти',
  disabled: false,
  type: 'button',
  variant: 'secondary',
};

Primary.args = {
  children: 'Подобрать психолога',
  disabled: false,
  type: 'button',
  variant: 'primary',
};

Text.args = {
  children: '+ добавить высшее образование',
  disabled: false,
  variant: 'text',
  href: '/',
};

TextIcon.args = {
  children: 'Назад',
  disabled: false,
  variant: 'text-icon',
  href: '/',
};
