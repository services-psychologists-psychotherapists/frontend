import React from 'react';
import './HowToStart.css';
import Title from '../generic/Title/Title';
/* import Button from '../generic/Button/Button'; */
import { LIST_OF_STEPS } from '../../constants/constants';

export default function HowToStart() {
  return (
    <section className="how-to-start">
      <Title size="m" text="Как начать работать с нами?" />
      <ul className="how-to-start__cards">
        {LIST_OF_STEPS.map((el) => {
          if (el.content === 'image') {
            return console.log('imaaaage');
          }
          return console.log('teeeeeeeext');
        })}
      </ul>
    </section>
  );
}
