import { describe, it, expect } from "vitest";
import config from "../lib/index.js";

describe("Config object", () => {
  it("should export rules", () => {
    const configDOM = config[0];
    expect(Array.isArray(config)).toBeTruthy();
    expect(config.length).toBeGreaterThan(0);
    expect(configDOM.name).toEqual(undefined);
    expect(configDOM.plugins).toBeTypeOf("object");
    expect(configDOM.rules).toBeTypeOf("object");
    expect(config).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "mlauffer-ui5" }),
        expect.objectContaining({ name: "mlauffer-nodejs" }),
      ]),
    );
  });
});
