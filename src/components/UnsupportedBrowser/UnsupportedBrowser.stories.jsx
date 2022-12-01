/**
 * UnsupportedBrowser.jsx
 */
import React from 'react'

// Component(s)
import UnsupportedBrowser from './UnsupportedBrowser'

export default {
  title: 'UnsupportedBrowser',
  component: UnsupportedBrowser,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
}

export const Default = () => <UnsupportedBrowser />

Default.storyName = 'default'
