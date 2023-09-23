// prettier-ignore
import React, { useRef } from 'react';
import './Popup.css';
import { PropTypes, node } from 'prop-types';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Title from '../Title/Title';
import useOutsideClick from '../../../hooks/useOnClickOutside';

export default function Popup({
  isOpen,
  onClose,
  titleText,
  children,
  buttonsQuantity,
  buttonText,
  buttonTextAdd,
  ...props
}) {
  const additionalButtonProps = {
    className: props.classNameAdd,
    onClick: props.onClickAdd,
    type: props.typeAdd,
    disabled: props.disabledAdd,
    variant: props.variantAdd,
    size: props.sizeAdd,
    href: props.hrefAdd,
  };

  const ref = useRef();

  useOutsideClick(ref, () => {
    onClose();
  });

  // prettier-ignore
  const classesPopup = `popup ${isOpen ? 'popup-visible' : ''}`;
  // prettier-ignore
  return (
    <div className={classesPopup}>
      <div className="popup__container" ref={ref}>

        <button onClick={onClose} type="button" className="popup__button-close" />
        <Title size="s" text={titleText} />
        <div className="popup__content">
          {children}
        </div>

        {
          (buttonsQuantity === 1 && <Button {...props}>{buttonText}</Button>)
          || (buttonsQuantity === 2 && (
            <ButtonGroup>
              <Button {...props} variant="secondary">
                {buttonText}
              </Button>
              <Button {...additionalButtonProps}>
                {buttonTextAdd}
              </Button>
            </ButtonGroup>
          ))
          || (
            buttonsQuantity === 0 && null
          )
        }
      </div>
    </div>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  titleText: PropTypes.string.isRequired,
  children: node,
  buttonsQuantity: PropTypes.number,
  buttonText: PropTypes.string.isRequired,
  buttonTextAdd: PropTypes.string,

  classNameAdd: PropTypes.string,
  onClickAdd: PropTypes.func,
  typeAdd: PropTypes.oneOf(['button', 'submit']),
  disabledAdd: PropTypes.bool,
  variantAdd: PropTypes.oneOf(['primary', 'secondary', 'text', 'text-icon']),
  sizeAdd: PropTypes.oneOf(['l', 'm']),
  hrefAdd: PropTypes.string,
};

Popup.defaultProps = {
  children: null,
  buttonsQuantity: 0,
  buttonTextAdd: '',
  classNameAdd: '',
  onClickAdd: () => {},
  typeAdd: 'button',
  disabledAdd: false,
  variantAdd: 'primary',
  sizeAdd: 'l',
  hrefAdd: '',
};
