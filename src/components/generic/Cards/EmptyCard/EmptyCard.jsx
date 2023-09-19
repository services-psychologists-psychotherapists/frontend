import React from 'react';
import './EmptyCard.css';
import { oneOf, string } from 'prop-types';
import Paragraph from '../../Paragraph/Paragraph';
import Title from '../../Title/Title';
import Button from '../../Button/Button';

export default function EmptyCard({
  type,
  title,
  paragraph,
  textBtn,
  href
}) {
  return (
    <div className={`empty-card empty-card_type_${type}`}>
      {type === 'psycho'
        ? (
          <>
            <Paragraph size="l">{title}</Paragraph>
            <Paragraph>{paragraph}</Paragraph>
          </>
        ) : (
          <>
            <Title size="s" text={title} />
            <p className="empty-card__paragraph">{paragraph}</p>
          </>
        )}
      {textBtn && <Button href={href}>{textBtn}</Button>}
    </div>
  );
}

EmptyCard.propTypes = {
  type: oneOf(['client', 'psycho']),
  title: string.isRequired,
  paragraph: string.isRequired,
  href: string,
  textBtn: string,
};
EmptyCard.defaultProps = {
  type: 'psycho',
  href: '',
  textBtn: '',
};
