/**
 * NoiseGrain.jsx
 */
import React from 'react';

// Component(s)
import NoiseGrain from './NoiseGrain';

export default {
  title: 'NoiseGrain',
  component: NoiseGrain,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <NoiseGrain />;

Default.storyName = 'default';
