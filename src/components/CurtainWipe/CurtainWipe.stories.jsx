/**
 * CurtainWipe.jsx
 */
import React from 'react';

// Component(s)
import CurtainWipe from './CurtainWipe';

export default {
  title: 'CurtainWipe',
  component: CurtainWipe,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <CurtainWipe />;

Default.storyName = 'default';
