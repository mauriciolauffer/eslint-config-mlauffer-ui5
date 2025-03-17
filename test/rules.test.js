import { describe, it, expect } from "vitest";
import { RuleTester } from "eslint";
import config from "../lib/index.js";

const tester = new RuleTester();
const configDOM = config.find((conf) => !!conf?.plugins?.["no-unsanitized"]);

describe("ESLint config", () => {
  it("it should be mlauffer-ui5", () => {
    const configUi5 = config[config.length - 1];
    expect(configUi5.name).toEqual("mlauffer-ui5");
  });

  it("it should be mlauffer-ui5", () => {
    const rule = configDOM.plugins["no-unsanitized"].rules.method;
    const valid = [
      { code: "n.insertAdjacentHTML('afterend', 'meh');" },
      { code: "n.insertAdjacentHTML('afterend', '<br>');" },
    ];
    const invalid = [
      {
        code: "node.insertAdjacentHTML('beforebegin', htmlString);",
        errors: [
          { message: "Unsafe call to node.insertAdjacentHTML for argument 1" },
        ],
      },
      {
        code: "node.insertAdjacentHTML('beforebegin', template.getHTML());",
        errors: [
          { message: "Unsafe call to node.insertAdjacentHTML for argument 1" },
        ],
      },
    ];
    tester.run("no-unsanitized/DOM/method", rule, { valid, invalid });
    expect(configDOM).toBeTypeOf("object");
    expect(rule).toBeTypeOf("object");
  });

  it("it should be mlauffer-ui5", () => {
    const rule = configDOM.plugins["no-unsanitized"].rules.property;
    const valid = [
      { code: "a.innerHTML = 'test';" },
      { code: "u.innerHTML = '<span>${lulz}</span>';" },
    ];
    const invalid = [
      {
        code: "m.innerHTML = htmlString;",
        errors: [{ message: "Unsafe assignment to innerHTML" }],
      },
      {
        code: "a.innerHTML += template.toHtml();",
        errors: [{ message: "Unsafe assignment to innerHTML" }],
      },
    ];
    tester.run("no-unsanitized/DOM/property", rule, { valid, invalid });
    expect(configDOM).toBeTypeOf("object");
    expect(rule).toBeTypeOf("object");
  });
});
