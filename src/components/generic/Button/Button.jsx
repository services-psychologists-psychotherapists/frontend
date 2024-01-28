import React from 'react';
import './Button.css';
import { func, node, bool, string, oneOf } from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({
  onClick, children,
  type, disabled,
  variant, className,
  size, href,
}) {
  const classes = `button button_type_${variant} button_size_${size}${
    className ? ` ${className}` : ''}${
    disabled ? ` button_disabled button_type_${variant}-disabled` : ` button_type_${variant}-active`
  }`;
  const Tag = href !== '' ? Link : 'button';

  const handlerBtnClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  const props = () => {
    if (href !== '') {
      if (disabled) {
        return '';
      }
      return { to: href, onClick: () => onClick() };
    }
    return { type, onClick: handlerBtnClick };
  };

  return (
    <Tag className={classes} disabled={disabled} size={size} {...props()}>
      {variant === 'text-icon' ? (
        <svg>
          <path d="M7 1L1 7L7 13" />
        </svg>
      ) : ''}
      <span>{children}</span>
    </Tag>
  );
}

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
  type: oneOf(['button', 'submit']),
  disabled: bool,
  variant: oneOf(['primary', 'secondary', 'text', 'text-icon']),
  className: string,
  size: oneOf(['l', 'm']),
  href: string,
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
