// import React from 'react';
// import { withRouter } from 'storybook-addon-react-router-v6';
// import CurrentUserContext from '../../contexts/CurrentUserContext';
// import Header from './Header';
// import { PSYCHO } from '../../constants/db';

// export default {
//   title: 'Global components/Header/Header',
//   component: Header,
//   decorators: [
//     withRouter,
//     (Story) => (
//       <CurrentUserContext.Provider value={PSYCHO}>
//         <Story />
//       </CurrentUserContext.Provider>
//     ),
//   ],
//   tags: ['autodocs'],
//   argTypes: {
//     isLoggedIn: {
//       type: 'boolean',
//       control: 'boolean',
//       defaultValue: false,
//       description: 'Переключения состояние хедера для залогиненного пользователя',
//     },
//   },
// };

// export function Headers() {
//   return (
//     <div
//       style={{
//         width: '1000px',
//         backgroundColor: '#e6e6f7',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '50px',
//       }}
//     >
//       <Header isLoggedIn />
//       <Header isLoggedIn={false} />
//     </div>
//   );
// }

// export function LoggedIn() {
//   return (
//     <div
//       style={{
//         width: '1000px',
//         backgroundColor: '#e6e6f7',
//       }}
//     >
//       <Header isLoggedIn />
//     </div>
//   );
// }
// export function NoLoggedIn() {
//   return (
//     <div
//       style={{
//         width: '1000px',
//         backgroundColor: '#e6e6f7',
//       }}
//     >
//       <Header isLoggedin={false} />
//     </div>
//   );
// }
