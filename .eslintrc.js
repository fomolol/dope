module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    es2021: true,
  },
  rules: {
    'no-unused-vars': 2,
    'no-undef': 2,
  },
  plugins: ['unused-imports'],
  extends: [
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:testing-library/react',
    'plugin:jest/all',
  ],
  ignorePatterns: ['**/public/*.js'],
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['useLayoutEffect'],
            message: 'Please import from @fomolol/hooks instead.',
          },
        ],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
};
