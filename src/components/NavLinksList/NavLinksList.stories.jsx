import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import '../App/App.css';
import NavLinksList from './NavLinksList';
import { NAVIGATION_LINKS } from '../../constants/constants';

export default {
  title: 'Navigation/Navigation links list',
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
  },
};

const Template = function link(args) {
  return <NavLinksList {...args} />;
};

export const Column = Template.bind({});
export const Row = Template.bind({});

Column.args = {
  direction: 'column',
  list: NAVIGATION_LINKS,
};

Row.args = {
  list: NAVIGATION_LINKS,
};
