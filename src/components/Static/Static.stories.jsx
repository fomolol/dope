/**
 * Static.jsx
 */
import React from 'react';

// Component(s)
import Static from './Static';

export default {
  title: 'Static',
  component: Static,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <Static />;

Default.storyName = 'default';
