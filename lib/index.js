'use strict';

module.exports = {
  root: false,
  extends: [
    'eslint-config-mlauffer-nodejs'
  ],
  env: {
    node: false,
    es2020: false,
    browser: true,
    es6: true,
    qunit: true,
    jquery: true,
    worker: true,
    protractor: true,
    jasmine: true,
    amd: true,
    serviceworker: true,
    jest: true
  },
  globals: {
    sap: true,
    sinon: true
  }
};
