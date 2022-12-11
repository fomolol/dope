/**
 * StickyDrawer.jsx
 */
import React from 'react';

// Component(s)
import StickyDrawer from './StickyDrawer';

export default {
  title: 'StickyDrawer',
  component: StickyDrawer,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <StickyDrawer />;

Default.storyName = 'default';
