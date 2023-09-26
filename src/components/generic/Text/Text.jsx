import React from 'react';
import { string, oneOf } from 'prop-types';
import './Text.css';

export default function Text({ children, size, type }) {
  const Tag = type !== 'p' ? 'span' : 'p';

  const textClasses = `text text_size_${size} ${type === 'tag' ? 'text_type_tag' : ''}`;

  return <Tag className={textClasses}>{children}</Tag>;
}

Text.propTypes = {
  children: string.isRequired,
  size: oneOf(['l', 'm', 's']),
  type: oneOf(['tag', 'span', 'p']),
};

Text.defaultProps = {
  size: 's',
  type: 'p',
};
