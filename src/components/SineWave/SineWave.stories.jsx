/**
 * SineWave.jsx
 */
import React from 'react'

// Component(s)
import SineWave from './SineWave'

export default {
  title: 'SineWave',
  component: SineWave,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
}

export const Default = () => <SineWave />

Default.storyName = 'default'
