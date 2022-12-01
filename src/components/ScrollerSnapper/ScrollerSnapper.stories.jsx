/**
 * ScrollerSnapper.jsx
 */
 import * as React from 'react';

 // Component(s)
 import ScrollerSnapper from './ScrollerSnapper';

 export default {
   title: 'ScrollerSnapper',
   component: ScrollerSnapper,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <ScrollerSnapper />;

 Default.storyName = 'default';
