import React from 'react';
import './WhereToBegin.css';
import Button from '../generic/Button/Button';
import { CUSTOMER_STEPS } from '../../constants/constants';
import BlockWithTitle from '../templates/BlockWithTitle/BlockWithTitle';

export default function WhereToBegin() {
  return (
    <section className="where-to-begin">
      <BlockWithTitle
        size="m"
        title="С чего начать?"
        constainerClasses="where-to-begin__container"
        titleLvl="2"
        titleClasses="where-to-begin__title"
      >
        <ul className="where-to-begin__list">
          {CUSTOMER_STEPS.map((el) => (
            <li
              className="where-to-begin__card"
              key={el.numberStep}
            >
              <span className="where-to-begin__subtitle-number">{el.numberStep}</span>
              <p className="where-to-begin__description">{el.descriptionStep}</p>
            </li>
          ))}
        </ul>
        <Button
          href="/directory_psychologists"
          className="where-to-begin__button"
        >
          Каталог психологов
        </Button>
      </BlockWithTitle>
    </section>
  );
}
