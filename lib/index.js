'use strict';

module.exports = {
  root: false,
  extends: [
    'eslint-config-mlauffer-nodejs'
  ],
  env: {
    node: false,
    es2022: false,
    browser: true,
    es6: true,
    jquery: true,
    qunit: true,
    worker: true,
    amd: true,
    serviceworker: true
  },
  globals: {
    sap: true
  }
};
