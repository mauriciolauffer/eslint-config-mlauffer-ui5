import { describe, it, expect } from "vitest";
import config from "../lib/index.js";
import { RuleTester } from "eslint";

const tester = new RuleTester();

describe("Execute rules", () => {
  it("should execute rule no-unsanitized/DOM/method", () => {
    const configDOM = config[config.length - 2];
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
    tester.run("no-unsanitized/DOM/property", rule, { valid, invalid });
    expect(Array.isArray(config)).toBeTruthy();
  });

  it("should execute rule no-unsanitized/DOM/property", () => {
    const configDOM = config[config.length - 2];
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
    expect(Array.isArray(config)).toBeTruthy();
  });
});
