/**
 * BlasterText.jsx
 */
import * as React from 'react';

// Component(s)
import BlasterText from './BlasterText';

export default {
  title: 'BlasterText',
  component: BlasterText,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <BlasterText />;
export const Started = () => <BlasterText start />;

Default.storyName = 'default';
