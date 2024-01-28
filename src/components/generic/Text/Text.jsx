import React from 'react';
import { string, oneOf, node } from 'prop-types';
import './Text.css';

export default function Text({ children, size, type, className }) {
  const Tag = type !== 'p' ? 'span' : 'p';
  const textClasses = `text text_size_${size}${type === 'tag' ? ' text_type_tag' : ''}`;

  return (
    <Tag className={`${textClasses}${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  );
}

Text.propTypes = {
  children: node.isRequired,
  size: oneOf(['l', 'm', 's']),
  type: oneOf(['tag', 'span', 'p']),
  className: string,
};

Text.defaultProps = {
  size: 's',
  type: 'p',
  className: '',
};
