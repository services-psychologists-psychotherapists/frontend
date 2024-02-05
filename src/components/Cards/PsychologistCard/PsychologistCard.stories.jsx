// import React from 'react';
// import { withRouter } from 'storybook-addon-react-router-v6';
// import PsychologistCard from './PsychologistCard';
// import { PSYCHO } from '../../../constants/db';

// export default {
//   title: 'Global components/Cards/PsychologistCard',
//   component: PsychologistCard,
//   decorators: [withRouter],
//   tags: ['autodocs'],
//   argTypes: {
//     type: {
//       type: 'string',
//       defaultValue: '',
//     },
//     psychologist: {
//       control: {
//         type: 'object',
//         defaultValue: null,
//         keys: {
//           last_name: { type: 'string' },
//           first_name: { type: 'string' },
//           avatar: { type: 'string' },
//           age: { type: 'number' },
//           about: { type: 'string' },
//           experience: { type: 'number' },
//           price: { type: 'number' },
//           themes: [
//             {
//               id: { type: 'number' },
//               title: { type: 'string' },
//             },
//           ],
//           institutes: [
//             {
//               title: { type: 'string' },
//               speciality: { type: 'string' },
//               graduation_year: { type: 'string' },
//             },
//           ],
//           courses: [
//             {
//               title: { type: 'string' },
//               speciality: { type: 'string' },
//               graduation_year: { type: 'string' },
//             },
//           ],
//           duration: { type: 'string' },
//           slots: [
//             {
//               id: { type: 'number' },
//               datetime_from: { type: 'string' },
//             },
//           ],
//           approaches: [
//             {
//               id: { type: 'number' },
//               title: { type: 'string' },
//             },
//           ],
//         },
//       },
//     },
//   },
// };

// function Template(args) {
//   return (
//     <div style={{ maxWidth: '900px' }}>
//       <PsychologistCard {...args} />
//     </div>
//   );
// }

// export const Small = Template.bind({});
// export const Large = Template.bind({});

// Small.args = {
//   psychologist: PSYCHO,
// };

// Large.args = {
//   psychologist: PSYCHO,
//   type: 'full',
// };
