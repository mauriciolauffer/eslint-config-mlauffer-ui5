import globals from "globals";
// import nounsanitized from "eslint-plugin-no-unsanitized";
import nodejs from "eslint-config-mlauffer-nodejs";

export default [
  ...nodejs,
  // nounsanitized.configs.DOM,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser,
        sap: "readonly",
      },
    },
  },
];
