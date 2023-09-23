import React from 'react';
import './PopupTemplate.css';
import { PropTypes } from 'prop-types';
import Popup from '../generic/Popup/Popup';

// prettier-ignore
export default function PopupTemplate({ isOpenPopup, popupName }) {
  return (
    (popupName === 'ConfirmDeletePopup' && <Popup isOpen={isOpenPopup} />)
    || (popupName === 'ConfirmDeletePopup' && <Popup isOpen={isOpenPopup} />)
    || (popupName === 'ConfirmdfdfDeletePopup' && <Popup isOpen={isOpenPopup} />)
  );
}

PopupTemplate.propTypes = {
  isOpenPopup: PropTypes.bool.isRequired,
  popupName: PropTypes.string.isRequired,
};
