import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import InfoBlock from './InfoBlock';
import './InfoBlock.css';
import Text from '../../../generic/Text/Text';

export default {
  title: 'Global components/Templates/InfoBlock',
  component: InfoBlock,
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Содержание блока',
    },
    title: {
      type: 'string',
      description: 'Заголовок',
    },
  },
};

function Template(args) {
  return (
    <div style={{ width: '900px' }}>
      <InfoBlock {...args} />
    </div>
  );
}

export const Block = Template.bind({});

Block.args = {
  title: 'O Себе',
  children: (
    <Text>
      Я клинический психолог, гештальт-терапевт с 12-летним опытом работы в профессии.
      Помогаю людям развивать осознанность, эмоциональный интеллект и строить здоровые,
      счастливые отношения.
    </Text>
  ),
};
