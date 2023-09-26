import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import NavLinksList from './NavLinksList';
import { CLIENT_PROFILE_NAV_LINKS, NAVIGATION_LINKS } from '../../constants/constants';

export default {
  title: 'Global components/Navigation/Navigation links list',
  component: NavLinksList,
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {
    direction: {
      type: 'string',
      control: 'radio',
      option: ['row', 'column'],
      defaulyValue: 'row',
    },
    navLink: {
      type: 'bool',
      description: 'Отключает активное состояние ссылки текущей страницы',
      defaultValue: true,
    },
    list: {
      type: 'array',
      direction: 'Массив с ссылками',
    },
    variant: {
      type: 'string',
      control: 'radio',
      option: ['violet'],
    },
  },
};

const Template = function link(args) {
  return <NavLinksList {...args} />;
};

export const Row = Template.bind({});
export const Column = Template.bind({});
export const Violet = Template.bind({});

Column.args = {
  direction: 'column',
  list: NAVIGATION_LINKS,
};
Violet.args = {
  direction: 'column',
  list: CLIENT_PROFILE_NAV_LINKS,
  variant: 'violet',
};

Row.args = {
  list: NAVIGATION_LINKS,
};
