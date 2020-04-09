'use strict';

module.exports = {
  root: false,
  plugins: [
    'security',
    'sonarjs',
  ],
  extends: [
    'eslint:recommended',
    'google',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    qunit: true,
    jquery: true,
    worker: true,
    protractor: true,
    jasmine: true,
    amd: true,
    serviceworker: true,
  },
  globals: {
    sap: true,
    sinon: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'strict': 2,
    'no-console': 2,
    'max-len': 0,
    'func-names': 0,
    'prefer-rest-params': 0,
    'valid-jsdoc': 0,
    'require-jsdoc': 0,
    'comma-dangle': ['error', 'never'],
  },
};
