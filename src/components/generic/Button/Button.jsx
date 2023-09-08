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
  size,
}) {
  const handlerBtnClick = (e) => {
    e.preventDefault();
    onClick();
  };

  const classes = `button button__${variant} button_size_${size} ${className}`;

  return (
    <button
      className={classes}
      onClick={handlerBtnClick}
      type={type}
      disabled={disabled}
      size={size}
    >
      <span>{children}</span>
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
  size: PropTypes.oneOf(['l', 'm']),
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  variant: 'primary',
  className: '',
  size: 'l',
};
