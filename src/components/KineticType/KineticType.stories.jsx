/**
 * KineticType.jsx
 */
import React from 'react';
import { Canvas } from '@react-three/fiber';

// Component(s)
import KineticType from './KineticType';

export default {
  title: 'KineticType',
  component: KineticType,
  decorators: [
    Story => (
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Story />
      </Canvas>
    ),
  ],
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <KineticType />;

Default.storyName = 'default';
