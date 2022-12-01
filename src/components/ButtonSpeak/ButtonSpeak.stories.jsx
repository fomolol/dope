/**
 * ButtonSpeak.jsx
 */
 import * as React from 'react';

 // Component(s)
 import ButtonSpeak from './ButtonSpeak';

 export default {
   title: 'ButtonSpeak',
   component: ButtonSpeak,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <ButtonSpeak />;

 Default.storyName = 'default';
