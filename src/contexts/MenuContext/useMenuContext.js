/**
 * @file contexts/MenuContext/useMenu.js
 */
import {useContext} from 'react';
import { MenuContext } from './MenuContext';

export const useMenu = () => {
  const { state, dispatch } = useContext(MenuContext);
  return [state, dispatch];
};
