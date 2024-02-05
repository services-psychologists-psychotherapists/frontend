import React from 'react';
import './EmptyCard.css';
import { oneOf, string } from 'prop-types';
import Text from '../../generic/Text/Text';
import Title from '../../generic/Title/Title';
import Button from '../../generic/Button/Button';
import { useResize } from '../../../hooks/useResize';

export default function EmptyCard({ type, title, paragraph, textBtn }) {
  const { isScreenSm } = useResize();

  return (
    <div className={`empty-card empty-card_type_${type}`}>
      {type === 'client' ? (
        <>
          <Text size="l">{title}</Text>
          <Text>{paragraph}</Text>
        </>
      ) : (
        <>
          <Title size="s" text={title} />
          <p className="empty-card__paragraph">{paragraph}</p>
        </>
      )}
      {textBtn
      && (
        <Button
          href="/psychologist_account_schedule"
          size={isScreenSm ? 'm' : 'l'}
        >
            {textBtn}
        </Button>
      )}
    </div>
  );
}

EmptyCard.propTypes = {
  type: oneOf(['client', 'psychologist']),
  title: string.isRequired,
  paragraph: string.isRequired,
  textBtn: string,
};
EmptyCard.defaultProps = {
  type: 'psychologist',
  textBtn: '',
};
