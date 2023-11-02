'use strict';

module.exports = {
  root: false,
  extends: [
    'mlauffer-nodejs',
    'plugin:no-unsanitized/DOM'
  ],
  env: {
    node: false,
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
