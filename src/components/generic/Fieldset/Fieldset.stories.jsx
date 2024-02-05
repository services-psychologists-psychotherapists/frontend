// import React from 'react';
// import { withRouter } from 'storybook-addon-react-router-v6';
// import '../App/App.css';
// import Fieldset from './Fieldset';
// import {
//   checkboxDropdownElement,
//   checkboxType,
//   dropdownLists,
//   inputElement,
//   radioDropdownElement,
//   radioType,
//   titlesDropdownElement,
// } from '../../constants/constants';
// import { useForm } from '../../hooks/useForm';

// export default {
//   title: 'Global Components/Fieldset/Fieldset',
//   component: Fieldset,
//   decorators: [withRouter],
//   tags: ['autodocs'],
//   argTypes: {
//     element: {
//       type: 'string',
//       description:
//       'Определяет в каком виде нам нужно поле и как в нём будут отображаться выбранные элементы',
//       options: [
//         'input-element',
//         'radio-dropdown-element',
//         'checkbox-dropdown-element',
//         'titles-dropdown-element',
//       ],
//       control: {
//         type: 'radio',
//       },
//     },
//     typeForDropdown: {
//       type: 'string',
//       description: 'Определяет каким образом отображаются кнопки в дропдауне.',
//       options: ['radio', 'checkbox'],
//       control: {
//         type: 'radio',
//       },
//       if: { arg: 'element', neq: 'input-element' },
//     },
//     title: {
//       type: 'string',
//       description: 'Тайтл для всего поля',
//     },
//     placeholder: {
//       type: 'string',
//       description: 'Плейсхолдер для инпута',
//     },
//     name: {
//       type: 'string',
//       description: 'Имя инпута',
//       if: { arg: 'element', eq: 'input-element' },
//     },
//     typeForInput: {
//       type: 'string',
//       description: 'Тип инпута внутри полей',
//       options: ['text', 'password', 'email'],
//       control: {
//         type: 'radio',
//       },
//       if: { arg: 'element', eq: 'input-element' },
//     },
//     dropdownContent: {
//       type: 'array',
//       description: 'Массив со строками. Список элементов внутри дропдауна',
//       options: [
//         'Гештальт - терапия',
//         'Экзистенциальный анализ',
//         'Телесная терапия',
//         'Панические атаки',
//         'Другое',
//       ],
//       control: {
//         type: 'check',
//       },
//     },
//     prompt: {
//       type: 'string',
//       description: 'Подсказка для поля',
//     },
//     disabled: {
//       type: 'boolean',
//       description: 'Достпуность полей',
//     },
//     minLength: {
//       type: 'string',
//       description: 'Минимальная длинна внутри инпута',
//       if: { arg: 'element', eq: 'input-element' },
//     },
//     maxLength: {
//       type: 'string',
//       description: 'Максимальная длинна внутри инпута',
//       if: { arg: 'element', eq: 'input-element' },
//     },
//     required: {
//       type: 'boolean',
//       description: 'Обазательное поле или нет',
//     },
//     promptClasses: {
//       type: 'string',
//       description: 'Дополнительный класс промпта для изменения размера и работы с окружением',
//     },
//     values: {
//       type: 'object',
//       description: 'Значения инпутов из хука useForm',
//     },
//     handleChange: {
//       type: 'func',
//       description: 'Функция работающая с изменениями в инпутах из хука useForm',
//     },
//     errors: {
//       type: 'object',
//       description: 'Значения ошибок из хука useForm',
//     },
//     selectedDropdownItems: {
//       type: 'object',
//       description:
//      'Объект со значениями выпадающих списков (в основном значения это массивы) из хука useForm',
//     },
//   },
// };

// const Template = function Field(args) {
//   const { values, errors, handleChange, selectedDropdownItems } = useForm();

//   return (
//     <form>
//       <Fieldset
//         handleChange={handleChange}
//         selectedDropdownItems={selectedDropdownItems}
//         values={values}
//         errors={errors}
//         {...args}
//       />
//     </form>
//   );
// };

// export const InputField = Template.bind({});
// export const RadioDropdownField = Template.bind({});
// export const CheckboxDropdownField = Template.bind({});
// export const TitlesDropdownField = Template.bind({});

// InputField.args = {
//   element: inputElement,
//   title: 'Имя',
//   placeholder: 'Александр',
//   name: 'Имя',
//   typeForInput: 'text',
// };

// RadioDropdownField.args = {
//   element: radioDropdownElement,
//   placeholder: 'выберите пол',
//   title: 'Пол',
//   dropdownContent: dropdownLists.genderList,
//   typeForDropdown: radioType,
// };

// CheckboxDropdownField.args = {
//   element: checkboxDropdownElement,
//   placeholder: 'Выберите все подходящие варианты',
//   title: 'Подход',
//   dropdownContent: dropdownLists.approachList,
//   typeForDropdown: checkboxType,
// };

// TitlesDropdownField.args = {
//   element: titlesDropdownElement,
//   placeholder: 'Выберите все подходящие варианты',
//   title: 'Основные направления работы',
//   dropdownContent: dropdownLists.mainGoalsOfWork,
//   typeForDropdown: checkboxType,
// };
