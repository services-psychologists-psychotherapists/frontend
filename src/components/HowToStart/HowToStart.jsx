import React from 'react';
import './HowToStart.css';
import Title from '../generic/Title/Title';
import Button from '../generic/Button/Button';
import { LIST_OF_STEPS } from '../../constants/constants';

export default function HowToStart() {
  return (
    <section className="how-to-start">
      <Title size="m" text="Как начать работать с нами?" />
      <ul className="how-to-start__cards-flow">
        {LIST_OF_STEPS.map((el, index) => (
          <li
            className={`how-to-start__cards ${
              index % 2 !== 0 ? 'cards_direction_row-reverse' : ''
            }`}
            key={el.id}
          >
            <div
              className={`how-to-start__card how-to-start__card_type_img how-to-start__card_color_${el.bgColorImg}`}
            >
              <img
                src={el.imgPath}
                className="how-to-start__img"
                alt={el.imgPath}
              />
            </div>
            <div
              className={`how-to-start__card how-to-start__card_type_text how-to-start__card_color_${el.bgColor}`}
            >
              <span className="how-to-start__subtitle-span">
                {el.numberStep}
              </span>
              <p className="how-to-start__subtitle">{el.nameStep}</p>
              <p className="how-to-start__description">{el.descriptionStep}</p>
              {el.numberStep === '01' ? (
                <Button
                  href={el.link}
                  className="how-to-start__button-apply"
                  variant="primary"
                >
                  Подать заявку
                </Button>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
