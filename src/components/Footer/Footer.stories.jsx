import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import '../App/App.css';
import './Footer.css';
import Footer from './Footer';

export default {
  title: 'Global components/Footer/Footer',
  component: Footer,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
};

function Template() {
  return <Footer />;
}

export const Default = Template.bind({});
