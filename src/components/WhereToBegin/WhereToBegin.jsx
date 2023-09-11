import React from 'react';
import './WhereToBegin.css';
import Title from '../generic/Title/Title';
import Button from '../generic/Button/Button';
import { CUSTOMER_STEPS } from '../../constants/constants';

export default function WhereToBegin() {
  return (
    <section className="where-to-begin">
      <Title size="m" text="С чего начать?" />
      <ul className="where-to-begin__cards">
        {CUSTOMER_STEPS.map((el) => (
          <li className="where-to-begin__card" key={el.numberStep}>
            <span className="where-to-begin__subtitle-number">
              {el.numberStep}
            </span>
            <p className="where-to-begin__description">{el.descriptionStep}</p>
          </li>
        ))}
      </ul>
      <Button onClick={() => {}} className="where-to-begin__button">
        Каталог психологов
      </Button>
    </section>
  );
}
