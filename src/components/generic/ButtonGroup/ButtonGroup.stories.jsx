import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

export default {
  title: 'Global components/Button/Buttons group',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
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

function Template(args) {
  return (
    <ButtonGroup {...args}>
      <Button {...args} variant="secondary" onClick={() => {}}>
        Отменить
      </Button>
      <Button {...args} onClick={() => {}}>
        Вернуться назад
      </Button>
    </ButtonGroup>
  );
}

export const Default = Template.bind({});
Default.args = {
  size: 'l',
};
