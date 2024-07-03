import { fixupPluginRules } from "@eslint/compat";
import nounsanitized from "eslint-plugin-no-unsanitized";

const fixupPlugin = fixupPluginRules(nounsanitized);
const plugin = {
  meta: {
    name: "no-unsanitized",
    version: "1.2.3",
  },
  configs: {},
  rules: fixupPlugin.rules,
  processors: {},
};

Object.assign(plugin.configs, {
  DOM: {
    name: "no-unsanitized/DOM",
    plugins: {
      "no-unsanitized": plugin,
    },
    rules: {
      "no-unsanitized/property": "error",
      "no-unsanitized/method": "error",
    },
  },
});

export default plugin;
