import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import ProfileInfoBlock from './ProfileInfoBlock';
import './ProfileInfoBlock.css';
import Text from '../../generic/Text/Text';

export default {
  title: 'Global components/Templates/ProfileInfoBlock',
  component: ProfileInfoBlock,
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
      <ProfileInfoBlock {...args} />
    </div>
  );
}

export const InfoBlock = Template.bind({});

// prettier-ignore
InfoBlock.args = {
  title: 'O Себе',
  children: (
    <Text>
      Я клинический психолог, гештальт-терапевт с 12-летним опытом работы в профессии.
      Помогаю людям развивать осознанность, эмоциональный интеллект и строить здоровые,
      счастливые отношения.
    </Text>
  ),
};
