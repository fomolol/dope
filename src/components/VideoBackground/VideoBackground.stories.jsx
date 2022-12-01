/**
 * VideoBackground.jsx
 */
 import * as React from 'react';

 // Component(s)
 import VideoBackground from './VideoBackground';

 export default {
   title: 'VideoBackground',
   component: VideoBackground,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <VideoBackground />;

 Default.storyName = 'default';
