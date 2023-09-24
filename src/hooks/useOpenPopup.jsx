import React, { createContext/* , useState */ } from 'react';
import PropTypes from 'prop-types';

const PopupContext = createContext();

export const usePopup = (data) => {
  if (data) {
    /*  setValue(data); */
  }
  return null;
};

export default function PopupProvider({ children }) {
  /* const [value, setValue] = useState({}); */
  return (
    <PopupContext.Provider>
      {/* value={value} */}
      {children}
    </PopupContext.Provider>
  );
}

PopupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
