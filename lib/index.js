import globals from "globals";
import nodejs from "eslint-config-mlauffer-nodejs";
import nounsanitized from "./compat.js";

export default [
  ...nodejs,
  nounsanitized.configs.DOM,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.qunit,
        sap: "readonly",
      },
    },
  },
];
