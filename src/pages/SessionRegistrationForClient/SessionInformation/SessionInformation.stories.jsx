import React from 'react';
import '../../../components/App/App.css';
import './SessionInformation.css';
import SessionInformation from './SessionInformation';
import { getPriceWithSpace } from '../../../utils/helpers';

export default {
  title: 'Global components/Session information/SessionInformation',
  component: SessionInformation,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '329px', height: '364px', margin: '0 150px 100px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    selectedTime: {
      type: 'string',
      description: 'Выбранное время в формате HH:mm',
      control: {
        type: 'text',
      },
    },
    selectedDay: {
      type: 'string',
      description: 'Выбранная дата в формате DD.MM.YYYY',
      control: {
        type: 'text',
      },
    },
    sessionDuration: {
      type: 'number',
      description: 'Длительность сеанса',
      control: {
        type: 'number',
      },
    },
    sessionPrice: {
      type: 'number',
      description: 'Цена сеанса',
      control: {
        type: 'number',
      },
    },
  },
};

function Template(args) {
  return <SessionInformation {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  selectedTime: '10:00',
  selectedDay: '30.09.2023',
  sessionDuration: 40,
  sessionPrice: getPriceWithSpace(4500),
};
