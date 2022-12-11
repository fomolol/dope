/**
 * BackgroundCanvas.jsx
 */
import React from 'react';

// Component(s)
import BackgroundCanvas from './BackgroundCanvas';

export default {
  title: 'BackgroundCanvas',
  component: BackgroundCanvas,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <BackgroundCanvas />;

Default.storyName = 'default';
