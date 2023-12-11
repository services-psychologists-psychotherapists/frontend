import React from 'react';
import { node, string } from 'prop-types';
import './TitleForBlock.css';
import Text from '../../generic/Text/Text';

export default function TitleForBlock({ children, text }) {
  return (
    <div className="user-data__form-block">
      <Text
        size="s"
        className="user-data__block-title"
      >
        {text}
      </Text>
      {children}
    </div>
  );
}

TitleForBlock.propTypes = {
  children: node.isRequired,
  text: string,
};

TitleForBlock.defaultProps = {
  text: '',
};
