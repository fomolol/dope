// .storybook/main.js|cjs|ts
const path = require('path');
const {
  mergeConfig
} = require('vite');
module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  // presets: [path.resolve(__dirname, './next-preset.js')],
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import('../vite.config.js')).default.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode']
      }
    });
  },
  framework: '@storybook/react-vite',
  docs: {
    docsPage: 'automatic'
  }
};