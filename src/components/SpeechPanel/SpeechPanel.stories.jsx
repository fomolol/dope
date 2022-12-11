/**
 * SpeechPanel.jsx
 */
import React from 'react';

// Component(s)
import SpeechPanel from './SpeechPanel';

export default {
  title: 'SpeechPanel',
  component: SpeechPanel,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <SpeechPanel />;

Default.storyName = 'default';
