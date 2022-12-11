/**
 * @file /contexts/MenuContext.js
 */
import { useMemo, useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

export const INITIAL_STATE = {
  isMenuOpen: false,
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU': {
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    }
    default: {
      return state;
    }
  }
};

export const MenuContext = createContext();

// Create the provider
export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, INITIAL_STATE);
  const store = useMemo(() => ({ state, dispatch }), [state]);
  return <MenuContext.Provider value={store}>{children}</MenuContext.Provider>;
};

MenuProvider.propTypes = {
  children: PropTypes.node,
};

export default { MenuContext, MenuProvider };
