import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import '../../App/App.css';
import NavigationLink from './NavigationLink';

export default {
  title: 'Navigation/Navigation Link',
  component: NavigationLink,
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {
    link: {
      type: 'string',
    },
    navLink: {
      type: 'bool',
      description: 'Отключает активное состояние ссылки текущей страницы',
      defaultValue: true,
    },
    text: {
      name: 'label',
    },
  },
};

const Template = function link(args) {
  return <NavigationLink {...args} />;
};

export const NavLink = Template.bind({});
export const Link = Template.bind({});

NavLink.args = {
  text: 'Каталог психологов',
  link: '/',
};

Link.args = {
  text: 'Каталог психологов',
  link: '/',
  navLink: false,
};