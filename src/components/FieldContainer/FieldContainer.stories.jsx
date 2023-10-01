import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import '../App/App.css';
import FieldContainer from './FieldContainer';
import {
  checkboxDropDownElement,
  checkboxType,
  dropDownLists,
  inputElement,
  radioDropDownElement,
  radioType,
  titlesDropDownElement,
} from '../../constants/constants';

export default {
  title: 'Global Components/FieldContainer/FieldContainer',
  component: FieldContainer,
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {
    element: {
      type: 'string',
      description:
        'Определяет в каком виде нам нужно поле и как в нём будут отображаться выбранные элементы',
      options: [
        'input-element',
        'radio-dropdown-element',
        'checkbox-dropdown-element',
        'titles-dropdown-element',
      ],
      control: {
        type: 'radio',
      },
    },
    typeForDropDown: {
      type: 'string',
      description: 'Определяет каким образом отображаются кнопки в дропдауне.',
      options: ['radio', 'checkbox'],
      control: {
        type: 'radio',
      },
      if: { arg: 'element', neq: 'input-element' },
    },
    title: {
      type: 'string',
      description: 'Тайтл для всего поля',
    },
    placeholder: {
      type: 'string',
      description: 'Плейсхолдер для инпута',
    },
    name: {
      type: 'string',
      description: 'Имя инпута',
      if: { arg: 'element', eq: 'input-element' },
    },
    typeForInput: {
      type: 'string',
      description: 'Тип инпута внутри полей',
      options: ['text', 'password', 'email'],
      control: {
        type: 'radio',
      },
      if: { arg: 'element', eq: 'input-element' },
    },
    dropDownContent: {
      type: 'array',
      description: 'Массив со строками. Список элементов внутри дропдауна',
      options: [
        'Гештальт - терапия',
        'Экзистенциальный анализ',
        'Телесная терапия',
        'Панические атаки',
        'Другое',
      ],
      control: {
        type: 'check',
      },
    },
    prompt: {
      type: 'string',
      description: 'Подсказка для поля',
    },
    disabled: {
      type: 'boolean',
      description: 'Достпуность полей',
    },
    minLength: {
      type: 'string',
      description: 'Минимальная длинна внутри инпута',
      if: { arg: 'element', eq: 'input-element' },
    },
    maxLength: {
      type: 'string',
      description: 'Максимальная длинна внутри инпута',
      if: { arg: 'element', eq: 'input-element' },
    },
    required: {
      type: 'boolean',
      description: 'Обазательное поле или нет',
    },
  },
};

const Template = function Field(args) {
  return <FieldContainer {...args} />;
};

export const InputField = Template.bind({});
export const RadioDropDownField = Template.bind({});
export const CheckboxDropDownField = Template.bind({});
export const TitlesDropDownField = Template.bind({});

InputField.args = {
  element: inputElement,
  title: 'Имя',
  placeholder: 'Александр',
  name: 'Имя',
  typeForInput: 'text',
};

RadioDropDownField.args = {
  element: radioDropDownElement,
  placeholder: 'выберите пол',
  title: 'Пол',
  dropDownContent: dropDownLists.genderList,
  typeForDropDown: radioType,
};

CheckboxDropDownField.args = {
  element: checkboxDropDownElement,
  placeholder: 'Выберите все подходящие варианты',
  title: 'Подход',
  dropDownContent: dropDownLists.approachList,
  typeForDropDown: checkboxType,
};

TitlesDropDownField.args = {
  element: titlesDropDownElement,
  placeholder: 'Выберите все подходящие варианты',
  title: 'Основные направления работы',
  dropDownContent: dropDownLists.mainGoalsOfWork,
  typeForDropDown: checkboxType,
};
