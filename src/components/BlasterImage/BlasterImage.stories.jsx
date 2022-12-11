/**
 * BlasterImage.jsx
 */
import React from 'react';

// Component(s)
import BlasterImage from './BlasterImage';

export default {
  title: 'BlasterImage',
  component: BlasterImage,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <BlasterImage />;

Default.storyName = 'default';
