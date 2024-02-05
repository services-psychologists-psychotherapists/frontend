// import React from 'react';
// import { withRouter } from 'storybook-addon-react-router-v6';
// import YourPsychologist from './YourPsychologist';
// import { PSYCHO } from '../../../constants/db';

// export default {
//   title: 'Global components/Cards/My Psychologist',
//   component: YourPsychologist,
//   decorators: [withRouter],
//   parameters: {
//     layout: 'padded',
//   },
//   tags: ['autodocs'],
//   argTypes: {
//     psychologist: {
//       description: 'Объект с данными выбранного психолога клиента',
//       type: 'object',
//       control: {
//         first_name: { type: 'string' },
//         last_name: { type: 'string' },
//         id: { type: 'string' },
//         avatar: { type: 'string' },
//         price: { type: 'string' },
//         duration: { type: 'string' },
//       },
//     },
//     nextSession: {
//       type: 'object',
//   description: 'В зависимости от того запланирована ли следующая сессия, меняет вариант кнопки',
//     },
//   },
// };

// const Template = function Card(args) {
//   return <YourPsychologist {...args} />;
// };

// export function Psychologist() {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//       <YourPsychologist psychologist={PSYCHO} />
//       <YourPsychologist psychologist={PSYCHO} nextSession={{}} />
//     </div>
//   );
// }
// export const PsychologistEmpty = Template.bind({});

// Psychologist.args = {
//   psychologist: PSYCHO,
// };

// PsychologistEmpty.args = {
//   psychologist: null,
// };

// export function YourPsycho() {
//   return <YourPsychologist psychologist={PSYCHO} />;
// }
