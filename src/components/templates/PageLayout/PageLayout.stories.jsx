// import React from 'react';
// import { withRouter } from 'storybook-addon-react-router-v6';
// import CurrentUserContext from '../../../contexts/CurrentUserContext';
// import PageLayout from './PageLayout';
// import { PSYCHO } from '../../../constants/db';
// import { Violet } from '../../NavLinksList/NavLinksList.stories';
// import BlockWithTitle from '../BlockWithTitle/BlockWithTitle';
// import { PsychologistEmpty } from '../../Cards/CardOfSession/CardOfSession.stories';
// import { YourPsycho } from '../../Cards/YourPsychologist/YourPsychologist.stories';
// import '../../../pages/ClientHomePage/ClientHomePage.css';

// export default {
//   title: 'Global components/Templates/PageLayout',
//   component: PageLayout,
//   decorators: [
//     withRouter,
//     (Story) => (
//       <CurrentUserContext.Provider value={PSYCHO}>
//         <Story />
//       </CurrentUserContext.Provider>
//     ),
//   ],
//   parameters: {
//     layout: 'padded',
//   },
//   tags: ['autodocs'],
//   argTypes: {
//     isLoggedIn: {
//       type: 'boolean',
//       control: 'boolean',
//       defaultValue: false,
//       description: 'Переключения состояние хедера для залогиненного пользователя',
//     },
//     children: {
//       control: false,
//       description: 'Основное наполнение страницы',
//     },
//     nav: {
//       control: false,
//       description: 'Навигационная панель слева от основного контента',
//     },
//     section: {
//       control: false,
//       description: 'Секция слева от заголовка',
//     },
//     title: {
//       type: 'string',
//       description: 'Заголовок страницы',
//     },
//   },
// };

// function Template(args) {
//   return (
//     <div style={{ width: '1440px', height: '100vh' }}>
//       <PageLayout {...args} />
//     </div>
//   );
// }

// export const Layout = Template.bind({});

// Layout.args = {
//   title: 'Главная',
//   nav: <Violet {...Violet.args} />,
//   children: (
//     <div className="client-account">
//       <BlockWithTitle title="Следующая сессия">
//         <PsychologistEmpty {...PsychologistEmpty.args} />
//       </BlockWithTitle>
//       <BlockWithTitle title="Ваш психолог">
//         <YourPsycho {...YourPsycho.args} />
//       </BlockWithTitle>
//     </div>
//   ),
// };
