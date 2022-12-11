/**
 * @file StickyButton.js
 */
import { memo, forwardRef, useCallback } from 'react';
import { useCursorStyle } from '@fomolol/tacklebox';

import { useMenu } from '../../contexts/MenuContext/useMenuContext';

import StickyCursor from '../StickyCursor';

import s from './StickyButton.module.css';

export const MenuButton = (
  { sticky = true, title = 'Lorem Ipsum', ...props },
  ref,
) => {
  const [, dispatch] = useMenu();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleOnToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE_MENU' });
  }, [dispatch]);

  return (
    <StickyCursor sticky={sticky}>
      <button
        className="text-white dark:text-black"
        onMouseEnter={addCursorBorder}
        onMouseLeave={removeCursorBorder}
        onClick={() => {
          handleOnToggle();
          onClick();
        }}
        ref={ref}
        {...props}
      >
        <span className="px-4 py-2 font-mono text-sm tracking-widest transition duration-500 ease-out bg-black hover:bg-accent2 active:bg-accent3 dark:bg-white">
          {title}
        </span>
      </button>
    </StickyCursor>
  );
};

export default memo(forwardRef(MenuButton));
