const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig
    // const { dir } = options

    const config = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    }

    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    // @see https://stackoverflow.com/questions/41359504/webpack-bundle-js-uncaught-referenceerror-process-is-not-defined
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
      })
    )

    // Handles the jsconfig aliases
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules']
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
      // '/share': path.resolve(__dirname, '../public/share'),
      // '/video': path.resolve(__dirname, '../public/video'),
      // '/fonts': path.resolve(__dirname, '../public/fonts'),
      // '/img': path.resolve(__dirname, '../public/img'),
    }

    // Skip tests and stories from being compiled during development
    // Note: This speeds up compilation.
    config.module.rules.push({
      test: /\.(spec,test)\.(js|jsx)$/,
      loader: 'ignore-loader',
    })

    // SVG rules
    config.module.rules.push({
      test: /\.(svg)$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            memo: true,
            dimensions: false,
            svgoConfig: {
              multipass: true,
              plugins: [
                'removeDimensions',
                'removeOffCanvasPaths',
                'reusePaths',
                'removeElementsByAttr',
                'removeStyleElement',
                'removeScriptElement',
                'prefixIds',
                'cleanupIDs',
                {
                  name: 'cleanupNumericValues',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'convertPathData',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'convertTransform',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'cleanupListOfValues',
                  params: {
                    floatPrecision: 1,
                  },
                },
              ],
            },
          },
        },
      ],
    })

    // GraphQL rules
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      // include: [dir],
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ]

    // Altered config
    return config
  },
}
