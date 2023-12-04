import React from 'react';
import { string } from 'prop-types';
import './Success.css';
import successfull from '../../images/successfull_request.svg';
import Title from '../generic/Title/Title';
import Text from '../generic/Text/Text';
import Button from '../generic/Button/Button';

export default function Success({ title, text, buttonText, buttonHref }) {
  return (
    <section className="success">
      <img src={successfull} alt="Заявка отправлена" className="success__img" />
      <div className="success__description">
        <Title text={title} className="success__title" />
        <Text size="s">{text}</Text>
      </div>
      <Button href={buttonHref}>{buttonText}</Button>
    </section>
  );
}

Success.propTypes = {
  title: string,
  text: string,
  buttonText: string,
  buttonHref: string,
};

Success.defaultProps = {
  title: '',
  text: '',
  buttonText: '',
  buttonHref: '',
};
