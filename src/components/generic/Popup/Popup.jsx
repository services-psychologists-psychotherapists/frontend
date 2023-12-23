import React, { useRef } from 'react';
import './Popup.css';
import { node } from 'prop-types';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Title from '../Title/Title';
import useOutsideClick from '../../../hooks/useOnClickOutside';
import { usePopup } from '../../../hooks/usePopup';

export default function Popup({ children }) {
  const ref = useRef();
  const { value, setValue, onClick } = usePopup();

  const closePopup = () => {
    setValue(null);
  };

  useOutsideClick(ref, () => closePopup());

  const title = value ? value.data.title : '';
  const text = value ? value.data.text : '';
  const { buttons } = value ? value.data : [];
  const buttonsQuantity = buttons ? buttons.length : 0;

  return (
    <div className={`popup ${value ? 'popup-visible' : ''}`}>
      {value && (
        <div className="popup__container" ref={ref}>
          <button type="button" className="popup__button-close" onClick={closePopup} />
          <Title size="s" text={title} />
          {children && <div className="popup__content">{children}</div>}
          {text && <p className="popup__text">{text}</p>}
          {(buttonsQuantity === 1 && (
          <Button
            onClick={() => {
              if (buttons[0].onClick) {
                buttons[0].onClick();
              } else {
                onClick();
              }
              closePopup();
            }}
            type={buttons[0].type}
            size={buttons[0].size}
            variant={buttons[0].variant}
            href={buttons[0].href || ''}
          >
            {buttons[0].label}
          </Button>
          ))
            || (buttonsQuantity >= 2 && (
              <ButtonGroup>
                {buttons.map((button) => (
                  <Button
                    key={button.label}
                    onClick={() => {
                      if (button.onClick) {
                        button.onClick();
                      } else {
                        onClick();
                      }
                      closePopup();
                    }}
                    type={button.type}
                    size={button.size}
                    variant={button.variant}
                    href={button.href || ''}
                  >
                    {button.label}
                  </Button>
                ))}
              </ButtonGroup>
            ))
            || (buttonsQuantity === 0 && null)}
        </div>
      )}
    </div>
  );
}

Popup.propTypes = {
  children: node,
};

Popup.defaultProps = {
  children: null,
};
