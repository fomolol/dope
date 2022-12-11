// Use next/image in Storybook
// @see https://xenox.dev/next-image-with-storybookjs/

// import '/styles/variables.css'

// Import Font Styles
// You can find fonts at https://fonts.adobe.com/
// @import url('https://use.typekit.net/tyl1imq.scss');
import '../src/styles/fonts.css'

// Import Tailwind Styles
import '../src/styles/tailwind.css'

import '../src/styles/globals.css'

// import '@storybook/addon-console' // @see https://github.com/storybookjs/storybook-addon-console/issues/41

// @see https://www.npmjs.com/package/@storybook/addon-viewport
// import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '812px',
    },
    type: 'mobile',
  },
  lg_mobile: {
    name: 'Large Mobile',
    styles: {
      width: '428px',
      height: '926px',
    },
    type: 'mobile',
  },
  sm_desktop: {
    name: 'Small Desktop',
    styles: {
      width: '1024px',
      height: '640px',
    },
    type: 'desktop',
  },
  lg_desktop: {
    name: 'Large Desktop',
    styles: {
      width: '1440px',
      height: '900px',
    },
    type: 'desktop',
  },
  xl_desktop: {
    name: 'XL Desktop',
    styles: {
      width: '1920px',
      height: '1200px',
    },
    type: 'desktop',
  },
}

// @see https://www.npmjs.com/package/@storybook/addon-console
// import { setConsoleOptions } from '@storybook/addon-console'

// export const decorators = [(Story) => <Story />]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    // ... axe options
    // element: '#root', // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {}, // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
  backgrounds: {
    default: 'light gray',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'light gray',
        value: '#f2f2f2',
      },
      {
        name: 'dark gray',
        value: '#7e7e7e',
      },
      {
        name: 'black',
        value: '#000000',
      },
    ],
  },
  viewport: {
    viewports: customViewports, // newViewports would be an ViewportMap. (see below for examples)
  },
  layout: 'fullscreen',
}