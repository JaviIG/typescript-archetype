const typescriptRules = require('./config/typescript.eslint.json');

module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier'
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    ...typescriptRules
  }
};
