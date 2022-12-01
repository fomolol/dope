/**
 * @file /contexts/CursorContext.js
 */
import { createContext, useReducer, useMemo } from 'react'
import PropTypes from 'prop-types'

const INITIAL_STATE = {
  cursorStyle: {
    bordered: false,
    color: '#ff0000',
  },
  position: null,
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CURSOR_STYLE': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          ...action.payload,
        },
      }
    }
    case 'ADD_CURSOR_BORDER': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          bordered: true,
        },
      }
    }
    case 'REMOVE_CURSOR_BORDER': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          bordered: false,
        },
      }
    }
    case 'ADD_CURSOR_COLOR': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          color: action.payload,
        },
      }
    }
    case 'RESET_CURSOR_COLOR': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          color: INITIAL_STATE.cursorStyle.color,
        },
      }
    }
    case 'LOCK_CURSOR_POSITION': {
      return {
        ...state,
        position: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

// Create the context
export const CursorContext = createContext()

// Create the provider
export const CursorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, INITIAL_STATE)
  const store = useMemo(() => ({ state, dispatch }), [state])
  return (
    <CursorContext.Provider value={store}>{children}</CursorContext.Provider>
  )
}

CursorProvider.propTypes = {
  children: PropTypes.node,
}

export default { CursorContext, CursorProvider }
