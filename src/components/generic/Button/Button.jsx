import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Button({
  onClick,
  children,
  type,
  disabled,
  variant,
  className,
  ...props
}) {
  const handlerBtnClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className={`button button__${variant} ${className}`}
      onClick={handlerBtnClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  variant: 'primary',
  className: '',
};
