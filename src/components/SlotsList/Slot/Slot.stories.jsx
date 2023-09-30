import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'storybook-addon-react-router-v6';
import { useArgs } from '@storybook/client-api';
import Slot from './Slot';

export default {
  title: 'Global components/Slots/Slot',
  component: Slot,
  decorators: [withRouter],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    session: {
      description:
        'Объект с данными слота психолога. Если передать агрументу null, то отобразиться свободный слот',
      control: {
        type: 'object',
        keys: {
          client: {
            type: 'object',
            keys: {
              first_name: { type: 'string' },
              last_name: { type: 'string' },
              id: { type: 'string' },
              avatar: { type: 'string' },
            },
          },
          slot: {
            type: 'object',
            keys: {
              datetime_from: { type: 'string' },
              datetime_to: { type: 'string' },
              id: { type: 'string' },
            },
          },
          href: { type: 'string' },
        },
      },
    },
    isSlotOpen: { type: 'boolean', control: 'boolean' },
    onClick: { type: 'func', description: 'Меняет значение isSlotOpen' },
  },
};

function Template({ onClick, ...args }) {
  const [{ isSlotOpen }, updateArgs] = useArgs();
  const handleOpenSlot = () => updateArgs({ isSlotOpen: !isSlotOpen });

  return (
    <div style={{ maxWidth: '407px' }}>
      <Slot onClick={handleOpenSlot} {...args} />
    </div>
  );
}

Template.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export const PsychologistsSlot = Template.bind({});
export const PsychologistsFreeSlot = Template.bind({});

PsychologistsSlot.args = {
  session: {
    client: {
      first_name: 'Полина',
      last_name: 'Коновалова',
      id: '12345678907',
    },
    slot: {
      datetime_from: '18.09.2023 19:20',
      datetime_to: '18.09.2023 20:10',
      id: '4948594',
    },
    href: '/zoom',
  },
  onClick: () => {},
};

PsychologistsFreeSlot.args = {
  session: {
    client: null,
    slot: {
      datetime_from: '18.09.2023 19:20',
      datetime_to: '18.09.2023 20:10',
      id: '4948994',
    },
    href: '/zoom',
  },
  onClick: () => {},
};
