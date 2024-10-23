import globals from "globals";
import nodejs from "eslint-config-mlauffer-nodejs";
import nounsanitized from "eslint-plugin-no-unsanitized";

export default [
  nounsanitized.configs.recommended,
  ...nodejs,
  {
    name: "mlauffer-ui5",
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.worker,
        ...globals.serviceworker,
        ...globals.qunit,
        sap: "readonly",
      },
    },
  },
];
