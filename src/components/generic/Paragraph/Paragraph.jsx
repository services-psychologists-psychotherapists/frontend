import React from 'react';
import { string, oneOf } from 'prop-types';
import './Paragraph.css';

export default function Paragraph({ children, size }) {
  return <p className={`paragraph paragraph_size_${size}`}>{children}</p>;
}

Paragraph.propTypes = {
  children: string.isRequired,
  size: oneOf(['l', 'm', 's']),
};

Paragraph.defaultProps = {
  size: 's',
};
