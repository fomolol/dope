/**
 * TagManager.jsx
 */
 import * as React from 'react';

 // Component(s)
 import TagManager from './TagManager';

 export default {
   title: 'TagManager',
   component: TagManager,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <TagManager />;

 Default.storyName = 'default';
