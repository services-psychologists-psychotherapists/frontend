import React from 'react';
import '../../App/App.css';
import Title from './Title';

export default {
  title: 'Heading',
  component: Title,
  controls: { sort: 'requiredFirst' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер заголовка',
      options: ['l', 'm'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'l',
    },
    titleLvl: {
      name: 'heading level',
      type: 'string',
      description: 'Уровень заголовка',
      options: ['1', '2', '3', '4', '5', '6'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: '2',
    },
    text: {
      type: 'string',
      description: 'Текст заголовка',
    },
  },
};

const Template = function Btn(args) {
  return <Title {...args} />;
};

export const Large = Template.bind({});
export const Medium = Template.bind({});
Large.args = {
  text: 'Подберем психолога, который вам поможет',
  titleLvl: '1',
};
Medium.args = {
  text: 'Подберем психолога, который вам поможет',
  size: 'm',
};