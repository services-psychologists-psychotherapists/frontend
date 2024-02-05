// import React from 'react';
// import { withRouter } from 'storybook-addon-react-router-v6';
// import BlockWithTitle from './BlockWithTitle';
// import { Psychologist } from '../../Cards/CardOfSession/CardOfSession.stories';
// import CurrentUserContext from '../../../contexts/CurrentUserContext';
// import { PSYCHO } from '../../../constants/db';

// export default {
//   title: 'Global components/Templates/BlockWithTitle',
//   component: BlockWithTitle,
//   staticDirs: ['../public'],
//   decorators: [
//     (Story) => (
//       <CurrentUserContext.Provider value={PSYCHO}>
//         <Story />
//       </CurrentUserContext.Provider>
//     ),
//     withRouter,
//   ],
//   parameters: {
//     layout: 'padded',
//   },
//   tags: ['autodocs'],
//   argTypes: {
//     children: {
//       control: false,
//       description: 'Содержимое блока',
//     },
//     title: {
//       type: 'string',
//       description: 'Заголовок блока',
//     },
//     size: {
//       type: 'string',
//       description: 'Устантанавливает размер шрифта и отступ между блоком и заголовком',
//       control: 'inline-radio',
//       options: ['xs', 'm'],
//       defaultValue: 'xs',
//     },
//   },
// };

// function Template(args) {
//   return (
//     <div style={{ height: '300px' }}>
//       <BlockWithTitle {...args} />
//     </div>
//   );
// }

// export const BlockXS = Template.bind({});
// export const BlockM = Template.bind({});

// BlockXS.args = {
//   title: 'Следующая сессия',
//   children: <Psychologist {...Psychologist.args} />,
// };

// BlockM.args = {
//   title: 'Следующая сессия',
//   children: <Psychologist {...Psychologist.args} />,
//   size: 'm',
// };
