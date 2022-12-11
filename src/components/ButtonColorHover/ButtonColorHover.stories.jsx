/**
 * ButtonColorHover.jsx
 */
import * as React from 'react';

// Component(s)
import ButtonColorHover from './ButtonColorHover';

export default {
  title: 'ButtonColorHover',
  component: ButtonColorHover,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <ButtonColorHover />;

Default.storyName = 'default';
