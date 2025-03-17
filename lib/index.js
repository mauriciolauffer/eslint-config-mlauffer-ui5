import globals from "globals";
import { defineConfig } from "eslint/config";
import nodejs from "eslint-config-mlauffer-nodejs";
import nounsanitized from "eslint-plugin-no-unsanitized";

export default defineConfig([
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
    extends: [nodejs, nounsanitized.configs.recommended],
  },
]);
