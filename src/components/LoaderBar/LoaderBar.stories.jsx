/**
 * LoaderBar.jsx
 */
 import * as React from 'react';

 // Component(s)
 import LoaderBar from './LoaderBar';

 export default {
   title: 'LoaderBar',
   component: LoaderBar,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <LoaderBar />;

 Default.storyName = 'default';
