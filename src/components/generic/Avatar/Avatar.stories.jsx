import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Avatar from './Avatar';
import avatar from '../../../images/psychologist_avatar.png';

export default {
  title: 'Global components/Avatar/Avatar',
  component: Avatar,
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'Фотография пользователя',
      type: 'string',
    },
    size: {
      type: 'string',
      control: 'inline-radio',
      options: ['xs', 's', 'm', 'l', 'xl'],
      defaultValue: 'xl',
    },
  },
};

export function SizeXS() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Avatar src={avatar} size="xs" />
      <Avatar src={null} size="xs" />
    </div>
  );
}
export function SizeS() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Avatar src={avatar} size="s" />
      <Avatar src={null} size="s" />
    </div>
  );
}
export function SizeM() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Avatar src={avatar} size="m" />
      <Avatar src={null} size="m" />
    </div>
  );
}
export function SizeL() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Avatar src={avatar} size="l" />
      <Avatar src={null} size="l" />
    </div>
  );
}

export function SizeXL() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Avatar src={avatar} size="xl" />
      <Avatar src={null} size="xl" />
    </div>
  );
}
