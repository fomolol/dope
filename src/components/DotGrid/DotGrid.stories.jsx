/**
 * DotGrid.jsx
 */
import React from 'react';

// Component(s)
import DotGrid from './DotGrid';

export default {
  title: 'DotGrid',
  component: DotGrid,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <DotGrid />;

Default.storyName = 'default';
