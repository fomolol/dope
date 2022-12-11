/**
 * ShuffleText.jsx
 */
import React from 'react';

// Component(s)
import ShuffleText from './ShuffleText';

export default {
  title: 'ShuffleText',
  component: ShuffleText,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <ShuffleText />;

Default.storyName = 'default';
