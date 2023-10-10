import React from 'react';
import '../App/App.css';
import './EmergencyHelp.css';
import EmergencyHelp from './EmergencyHelp';

export default {
  title: 'Global components/EmergencyHelp/EmergencyHelp',
  component: EmergencyHelp,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1440px', width: '100%', height: '654px' }}>
        <Story />
      </div>
    ),
  ],
};

function Template() {
  return <EmergencyHelp />;
}

export const Default = Template.bind({});
