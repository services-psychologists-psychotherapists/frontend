import React from 'react';
import '../App/App.css';
import TermsOfCooperation from './TermsOfCooperation';
import './TermsOfCooperation.css';

export default {
  title: 'Global components/Terms of cooperation/TermsOfCooperation',
  component: TermsOfCooperation,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1440px', width: '100%', height: '520px' }}>
        <Story />
      </div>
    ),
  ],
};

function Template() {
  return <TermsOfCooperation />;
}

export const Default = Template.bind({});
