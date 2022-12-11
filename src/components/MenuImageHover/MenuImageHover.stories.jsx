/**
 * MenuImageHover.jsx
 */
import React from 'react';

// Component(s)
import MenuImageHover from './MenuImageHover';

export default {
  title: 'MenuImageHover',
  component: MenuImageHover,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <MenuImageHover />;

Default.storyName = 'default';
