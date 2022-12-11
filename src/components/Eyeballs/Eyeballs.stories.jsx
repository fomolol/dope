/**
 * Eyeballballs.jsx
 */
import React from 'react';

// Component(s)
import Eyeballs from './Eyeballs';

export default {
  title: 'Eyeballs',
  component: Eyeballs,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <Eyeballs />;

Default.storyName = 'default';
