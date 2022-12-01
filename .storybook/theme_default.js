/**
 * @file theme_default.js
 * A custom Storybook configuration.
 * @see https://storybook.js.org/docs/configurations/theming/
 */
import { create } from '@storybook/theming'

import brandImage from './logo.svg'

const brandTitle = 'FOMOLOL Dope Storybook'
const brandUrl = 'https://github.com/fomolol/dope'

export default create({
  base: 'light',

  //   colorPrimary: '#FF3347',
  //   colorSecondary: '#D9182B',

  // UI
  // appBg: 'white',
  // appContentBg: 'linear-gradient(45deg, #2C42C0 50%, #389AFB 100%)',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  fontBase: 'brandon-grotesque, Helvetica, sans-serif',
  //   fontCode: 'monospace',

  // Text colors
  // textColor: '#4382F5',
  // textInverseColor: 'rgba(255,255,255,1)',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle,
  brandUrl,
  brandImage,
})
