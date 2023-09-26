// prettier-ignore
import React, {
  useRef,
  useState,
  useEffect,
  useContext
} from 'react';
import './Popup.css';
import { node } from 'prop-types';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Title from '../Title/Title';
import useOutsideClick from '../../../hooks/useOnClickOutside';
import { PopupContext } from '../../../hooks/useOpenPopup';

export default function Popup({ children }) {
  const ref = useRef();
  const popupData = useContext(PopupContext);
  console.log('это в попапе', popupData);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  useOutsideClick(ref, () => {
    setIsOpenPopup(false);
  });

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  useEffect(() => {
    if (popupData) {
      console.log('данные переданы, попап открывается', popupData);
      setIsOpenPopup(true);
    } else {
      console.log('данных нет попап закрыт');
      setIsOpenPopup(false);
    }
  }, [popupData]);

  const title = popupData ? popupData.data.title : null;
  const { buttons } = popupData ? popupData.data : [];
  const buttonsQuantity = buttons ? buttons.length : 0;

  const classesPopup = `popup ${isOpenPopup ? 'popup-visible' : ''}`;
  // prettier-ignore
  return (
    <div className={classesPopup}>
      <div className="popup__container" ref={ref}>

        <button type="button" className="popup__button-close" onClick={closePopup} />
        <Title size="s" text={title} />
        <div className="popup__content">
          {children}
        </div>

        {
          (buttonsQuantity === 1
            && (
              <Button
                onClick={buttons.onClick}
                type={buttons.type}
                size={buttons.size}
                variant={buttons.variant}
              >
                {buttons[0].label}
              </Button>
            )
          )// prettier-ignore
          || (buttonsQuantity >= 2 && (

            <ButtonGroup>
              {
                buttons.map((button) => (
                  <Button
                    key={button.label}
                    onClick={button.onClick}
                    type={button.type}
                    size={button.size}
                    variant={button.variant}
                  >
                    {button.label}
                  </Button>
                ))
              }
            </ButtonGroup>

          ))// prettier-ignore
          || (buttonsQuantity === 0 && null)
        }
      </div>
    </div>
  );
}

Popup.propTypes = {
  children: node,
};

Popup.defaultProps = {
  children: null,
};
