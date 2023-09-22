import React from 'react';
import Title from './Title';

export default {
  title: 'Global components/Typography/Heading',
  component: Title,
  controls: { sort: 'requiredFirst' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер заголовка',
      options: ['l', 'm', 's', 'xs'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'm',
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

function Template(args) {
  return <Title {...args} />;
}

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});
export const Light = Template.bind({});
Large.args = {
  text: 'Подберем психолога, который вам поможет',
  titleLvl: '1',
  size: 'l',
};

Medium.args = {
  text: 'Подберем психолога, который вам поможет',
};
Small.args = {
  text: 'Подберем психолога, который вам поможет',
  titleLvl: '3',
  size: 's',
};
Light.args = {
  text: 'Подберем психолога, который вам поможет',
  titleLvl: '3',
  size: 'xs',
};
