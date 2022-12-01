/**
 * ScrollSnapSection.jsx
 */
 import * as React from 'react';

 // Component(s)
 import ScrollSnapSection from './ScrollSnapSection';

 export default {
   title: 'ScrollSnapSection',
   component: ScrollSnapSection,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <ScrollSnapSection />;

 Default.storyName = 'default';
