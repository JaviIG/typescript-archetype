const typescriptRules = require('./config/typescript.eslint.json');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
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
