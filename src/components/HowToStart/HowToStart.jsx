import React from 'react';
import './HowToStart.css';
import Title from '../generic/Title/Title';
import Button from '../generic/Button/Button';
import { LIST_OF_STEPS, SCROLL_WIDTH_FOR_PSYCHO_PAGE } from '../../constants/constants';
import BlockWithTitle from '../templates/BlockWithTitle/BlockWithTitle';
import { useResize } from '../../hooks/useResize';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';

export default function HowToStart() {
  const classes = {
    imageBlock:
      (el) => `how-to-start__card how-to-start__card_type_img how-to-start__card_color_${el.bgColorImg}`,
    textBlock:
      (el) => `how-to-start__card how-to-start__card_type_text how-to-start__card_color_${el.bgColor}`,
    getOddNumber: (index) => (
      index % 2 !== 0
    ),
  };
  const scrollOnClick = useHorizontalScroll();

  const { width } = useResize();

  return (
    <section className="how-to-start">
      <BlockWithTitle
        size="m"
        title="Как начать работать с нами?"
        titleLvl="2"
        constainerClasses="how-to-start__container"
      >
        <div className="how-to-start__box scrollbar" {...scrollOnClick}>
          <ul className="how-to-start__list">
            {LIST_OF_STEPS.map((el, index) => (
              <li
                className={`how-to-start__list-item ${
                  classes.getOddNumber(index) ? 'how-to-start__list-item_reverse' : ''
                }`}
                key={el.numberStep}
              >
                <div className={classes.imageBlock(el)}>
                  <img
                    src={el.imgPath}
                    className="how-to-start__img"
                    alt={el.nameStep}
                  />
                </div>
                <div className={classes.textBlock(el)}>
                  <span className="how-to-start__num">{el.numberStep}</span>
                  <Title
                    size="s"
                    titleLvl="3"
                    text={el.nameStep}
                  />
                  <div className="how-to-start__content">
                    <p className="how-to-start__description">{el.descriptionStep}</p>
                    {el.numberStep === '01' && width > SCROLL_WIDTH_FOR_PSYCHO_PAGE && (
                    <Button
                      href={el.link}
                      variant="primary"
                    >
                      Подать заявку
                    </Button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {width <= SCROLL_WIDTH_FOR_PSYCHO_PAGE && (
          <Button
            href="/psychologists_registration"
            className="how-to-start__button"
            variant="primary"
          >
            Подать заявку
          </Button>
        )}
      </BlockWithTitle>
    </section>
  );
}
