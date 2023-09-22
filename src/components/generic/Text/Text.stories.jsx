import React from 'react';
import Text from './Text';

export default {
  title: 'Global components/Typography/Text',
  component: Text,
  controls: { sort: 'requiredFirst' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер шрифта',
      options: ['l', 'm', 's'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 's',
    },
    children: {
      type: 'string',
      description: 'Текст',
    },
    type: {
      type: 'string',
      option: ['span', 'p', 'tag'],
      description: 'Исходя из типа меняется тег компонента',
      control: 'radio',
      defaultValue: 'p',
    },
  },
};

function Template(args) {
  return <Text {...args} />;
}

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});
export const Tag = Template.bind({});

Large.args = {
  children: 'Проверьте свое доступное время на другие дни, чтобы клиент смог записаться',
  size: 'l',
};
Medium.args = {
  children: 'Проверьте свое доступное время на другие дни, чтобы клиент смог записаться',
  size: 'm',
};
Small.args = {
  children: 'Проверьте свое доступное время на другие дни, чтобы клиент смог записаться',
};

Tag.args = {
  children: 'Разобраться в себе',
  type: 'tag',
};
