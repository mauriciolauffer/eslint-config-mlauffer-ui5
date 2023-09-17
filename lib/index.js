'use strict';

module.exports = {
  root: false,
  extends: [
    'mlauffer-nodejs',
    'plugin:no-unsanitized/DOM'
  ],
  env: {
    node: false,
    es2022: false,
    es2020: true,
    browser: true,
    worker: true,
    serviceworker: true,
    jquery: false,
    qunit: false
  },
  globals: {
    sap: true
  }
};
