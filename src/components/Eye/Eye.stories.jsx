/**
 * Eye.jsx
 */
import React from 'react'

// Component(s)
import Eye from './Eye'

export default {
  title: 'Eye',
  component: Eye,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
}

export const Default = () => <Eye />

Default.storyName = 'default'
