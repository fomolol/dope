/**
 * Typography.jsx
 */
import React from 'react';

// Component(s)
import { H1, H2, H3, H4, H5, P1, P2, P3 } from './Typography';

export default {
  title: 'Typography',
  component: H1,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'left',
  },
};

export const Default = () => (
  <div className="flex flex-col w-full h-screen space-y-2">
    <H1 />
    <H2 />
    <H3 />
    <H4 />
    <H5 />
    <P1 />
    <P2 />
    <P3 />
  </div>
);
export const h1 = () => <H1 />;
export const h2 = () => <H2 />;
export const h3 = () => <H3 />;
export const h4 = () => <H4 />;
export const h5 = () => <H5 />;
export const p1 = () => <P1 />;
export const p2 = () => <P2 />;
export const p3 = () => <P3 />;

Default.storyName = 'default';
