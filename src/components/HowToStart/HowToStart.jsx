import React from 'react';
import './HowToStart.css';
import Title from '../generic/Title/Title';
import Button from '../generic/Button/Button';
import { LIST_OF_STEPS } from '../../constants/constants';

export default function HowToStart() {
  return (
    <section className="how-to-start">
      <Title size="m" text="Как начать работать с нами?" />
      <ul className="how-to-start__cards">
        {LIST_OF_STEPS.map((el) => {
          if (el.content === 'image') {
            return (
              <li className="how-to-start__card-img" key={el.numbKey}>
                <img
                  src={el.imgPath}
                  className="how-to-start__img"
                  alt={el.imgPath}
                />
              </li>
            );
          }
          if (el.content === 'text') {
            return (
              <li className="how-to-start__card" key={el.numbKey}>
                <span className="how-to-start__subtitle-span">
                  {el.numberStep}
                </span>
                <p className="how-to-start__subtitle">{el.nameStep}</p>
                <p className="how-to-start__description">
                  {el.descriptionStep}
                </p>
                {el.numberStep === '01' ? (
                  <Button
                    onClick={() => {}}
                    className="how-to-start__button-apply"
                    variant="primary"
                  >
                    Подать заявку
                  </Button>
                ) : null}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </section>
  );
}
