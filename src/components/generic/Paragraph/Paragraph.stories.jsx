import React from 'react';
import '../../App/App.css';
import Paragraph from './Paragraph';

export default {
  title: 'Global components/Typography/Paragraph',
  component: Paragraph,
  controls: { sort: 'requiredFirst' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер параграфа',
      options: ['l', 'm', 's'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 's',
    },
    children: {
      type: 'string',
      description: 'Текст параграфа',
    },
  },
};

function Template(args) {
  return <Paragraph {...args} />;
}

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});
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
