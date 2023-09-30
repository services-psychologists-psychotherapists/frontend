import React from 'react';
import HelpfulInformation from '../templates/HelpfulInformation/HelpfulInformation';
import Button from '../generic/Button/Button';
import './TermsOfCooperation.css';

export default function TermsOfCooperation() {
  return (
    <HelpfulInformation
      size="m"
      text="Остались вопросы?"
      containerClassName="terms-cooperation__container"
      sectionClassName="terms-cooperation"
    >
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
    </HelpfulInformation>
  );
}
