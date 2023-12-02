import React from 'react';
import './Success.css';
import successfull from '../../../images/successfull_request.svg';
import Title from '../../../components/generic/Title/Title';
import Text from '../../../components/generic/Text/Text';
import Button from '../../../components/generic/Button/Button';

export default function Success() {
  return (
    <section className="success">
      <img src={successfull} alt="Заявка отправлена" className="success__img" />
      <div className="success__description">
        <Title text="Заявка отправлена!" />
        <Text size="s">Как только мы все проверим, Вам на почту придет уведомление</Text>
      </div>
      <Button href="/">На главную страницу</Button>
    </section>
  );
}
