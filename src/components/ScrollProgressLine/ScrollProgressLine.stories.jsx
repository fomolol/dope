/**
 * ScrollProgressLine.jsx
 */
import React from 'react';

// Component(s)
import ScrollProgressLine from './ScrollProgressLine';

export default {
  title: 'ScrollProgressLine',
  component: ScrollProgressLine,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <ScrollProgressLine />;

Default.storyName = 'default';
