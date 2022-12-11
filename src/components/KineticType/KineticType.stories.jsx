/**
 * KineticType.jsx
 */
import React from 'react';

// Component(s)
import KineticType from './KineticType';

export default {
  title: 'KineticType',
  component: KineticType,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <KineticType />;

Default.storyName = 'default';
