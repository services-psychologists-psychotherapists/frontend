import React from 'react';
import './BtnSecondary.css';
import PropTypes from 'prop-types';

export default function BtnSecondary({
  onClick,
  children,
  type,
  disabled,
  ...props
}) {
  const handlerBtnClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className="btn-secondary"
      onClick={handlerBtnClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

BtnSecondary.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
};

BtnSecondary.defaultProps = {
  disabled: false,
  type: 'button',
};
