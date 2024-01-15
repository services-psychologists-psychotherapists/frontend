import React from 'react';
import Button from '../generic/Button/Button';
import './TermsOfCooperation.css';
import BlockWithTitle from '../templates/BlockWithTitle/BlockWithTitle';

export default function TermsOfCooperation() {
  return (
    <section className="terms-cooperation">
      <BlockWithTitle
        size="m"
        title="Остались вопросы?"
        titleLvl="2"
        constainerClasses="terms-cooperation__container"
      >
        <div className="terms-cooperation__content">
          <div className="terms-cooperation__text">
            <p className="terms-cooperation__description">
              Вы можете подробно ознакомиться с нашим договором или задать вопросы на нашу почту.
              <br />
              Мы ответим в течение дня
            </p>
            <p className="terms-cooperation__email">psyhelp@yandex.ru</p>
          </div>
          <Button
            type="button"
            variant="secondary"
            className="terms-cooperation__button"
            // TODO: настроить действие клика
            onClick={() => console.log('click')}
          >
            Условия сотрудничества
          </Button>
        </div>
      </BlockWithTitle>
    </section>
  );
}
