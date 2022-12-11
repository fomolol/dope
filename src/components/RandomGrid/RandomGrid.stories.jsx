/**
 * RandomGrid.jsx
 */
import React from 'react';

// Component(s)
import RandomGrid from './RandomGrid';

export default {
  title: 'RandomGrid',
  component: RandomGrid,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <RandomGrid />;

Default.storyName = 'default';
