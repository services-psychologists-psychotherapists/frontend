import React from 'react';
import '../App/App.css';
import './EmergencyHelp.css';
import EmergencyHelp from './EmergencyHelp';

export default {
  title: 'EmergencyHelp',
  component: EmergencyHelp,
};

function Template() {
  return <EmergencyHelp />;
}

export const Default = Template.bind({});
