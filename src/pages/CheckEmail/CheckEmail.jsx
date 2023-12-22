import React from 'react';
import Success from '../../components/Success/Success';
import { CHECK_EMAIL_DATA } from '../../constants/constants';

export default function CheckEmail() {
  return (
    <Success
      title={CHECK_EMAIL_DATA.title}
      text={CHECK_EMAIL_DATA.text}
      image={CHECK_EMAIL_DATA.image}
      buttonText={CHECK_EMAIL_DATA.buttonText}
      buttonHref={CHECK_EMAIL_DATA.buttonHref}
    />
  );
}
