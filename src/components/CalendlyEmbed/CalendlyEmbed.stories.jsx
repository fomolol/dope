/**
 * CalendlyEmbed.jsx
 */
 import * as React from 'react';

 // Component(s)
 import CalendlyEmbed from './CalendlyEmbed';

 export default {
   title: 'CalendlyEmbed',
   component: CalendlyEmbed,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <CalendlyEmbed />;

 Default.storyName = 'default';
