// import React from 'react';
// import moment from 'moment';
// import { withRouter } from 'storybook-addon-react-router-v6';
// import SlotsList from './SlotsList';
// import { SLOTS } from '../../constants/db';
// import { DATE_FORMAT } from '../../constants/constants';

// export default {
//   title: 'Global components/Slots/SlotsList',
//   component: SlotsList,
//   decorators: [withRouter],
//   parameters: {
//     layout: 'padded',
//   },
//   tags: ['autodocs'],
//   argTypes: {
//     sessions: [
//       {
//         type: 'object',
//         keys: {
//           client: {
//             type: 'object',
//             keys: {
//               first_name: { type: 'string' },
//               last_name: { type: 'string' },
//               id: { type: 'string' },
//             },
//           },
//           datetime_from: { type: 'string' },
//           datetime_to: { type: 'string' },
//           id: { type: 'string' },
//           href: { type: 'string' },
//         },
//       },
//     ],
//     selectedDay: {
//       type: 'object',
//       description: 'Выбраный день для отображения состояний, если массив слотов окажется пустым',
//     },
//   },
// };

// export function SelectedDay() {
//   return (
//     <div style={{ display: 'flex', gap: '40px', margin: 'auto' }}>
//       <SlotsList sessions={SLOTS} selectedDay={moment('18.09.2023', DATE_FORMAT)} />
//       <SlotsList sessions={[]} selectedDay={moment('18.09.2023', DATE_FORMAT)} />
//     </div>
//   );
// }

// export function Today() {
//   return (
//     <div style={{ display: 'flex', gap: '40px', margin: 'auto' }}>
//       <SlotsList sessions={SLOTS} selectedDay={moment()} />
//       <SlotsList sessions={[]} selectedDay={moment()} />
//     </div>
//   );
// }
