/**
 * SpinningLoader.jsx
 */
import React from 'react'

// Component(s)
import SpinningLoader from './SpinningLoader'

export default {
  title: 'SpinningLoader',
  component: SpinningLoader,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
}

export const Default = () => <SpinningLoader />

Default.storyName = 'default'
