import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({
  onClick,
  children,
  type,
  disabled,
  variant,
  className,
  size,
  href,
}) {
  const classes = `button button__${variant} button_size_${size} ${className} ${
    disabled ? `button_disabled button__${variant}_disabled` : `button__${variant}_active`
  }`;
  const Tag = href !== '' ? Link : 'button';

  const handlerBtnClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  function props() {
    if (href !== '') {
      if (disabled) {
        return '';
      }
      return { to: href, onClick: () => onClick() };
    }
    return { type, onClick: handlerBtnClick };
  }

  return (
    <Tag className={classes} disabled={disabled} size={size} {...props()}>
      {variant === 'text-icon' ? (
        <svg>
          <path d="M7 1L1 7L7 13" />
        </svg>
      ) : (
        ''
      )}
      <span>{children}</span>
    </Tag>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'text', 'text-icon']),
  className: PropTypes.string,
  size: PropTypes.oneOf(['l', 'm']),
  href: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  variant: 'primary',
  className: '',
  size: 'l',
  href: '',
  onClick: () => {},
};
