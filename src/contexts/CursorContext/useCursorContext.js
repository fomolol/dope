/**
 * @file contexts/CursorContext/useCursor.js
 */
import {useContext} from 'react'
import { CursorContext } from './CursorContext'

export const useCursor = () => {
  const { state, dispatch } = useContext(CursorContext)
  // Make them public
  return [state, dispatch]
}
