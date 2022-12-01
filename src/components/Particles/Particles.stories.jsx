/**
 * Particles.jsx
 */
 import * as React from 'react';

 // Component(s)
 import Particles from './Particles';

 export default {
   title: 'Particles',
   component: Particles,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <Particles />;

 Default.storyName = 'default';
