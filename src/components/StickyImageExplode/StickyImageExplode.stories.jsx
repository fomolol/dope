/**
 * StickyImageExplode.jsx
 */
import React from 'react';

// Component(s)
import StickyImageExplode from './StickyImageExplode';

export default {
  title: 'StickyImageExplode',
  component: StickyImageExplode,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'left',
  },
};

export const Default = () => <StickyImageExplode />;

Default.storyName = 'default';
