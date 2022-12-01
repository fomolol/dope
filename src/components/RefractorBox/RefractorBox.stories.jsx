/**
 * RefractorBox.jsx
 */
import * as React from 'react'

// Component(s)
import RefractorBox from './RefractorBox'

export default {
  title: 'RefractorBox',
  component: RefractorBox,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
}

export const Default = () => <RefractorBox />

Default.storyName = 'default'
