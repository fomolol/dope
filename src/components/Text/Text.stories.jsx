/**
 * Text.jsx
 */
import React from 'react';

// Component(s)
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <Text />;
export const FadeLetter = () => <Text type="fade-letter" />;
export const FadeWord = () => <Text type="fade-word" />;
export const FadeBlock = () => <Text type="fade-block" />;
export const OverflowWord = () => <Text type="overflow-word" />;

Default.storyName = 'default';
