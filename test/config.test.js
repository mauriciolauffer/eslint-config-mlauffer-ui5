import { describe, it, expect } from "vitest";
import config from "../lib/index.js";

describe("Config object", () => {
  it("should export rules", () => {
    const configDOM = config[config.length - 2][0];
    expect(Array.isArray(config)).toBeTruthy();
    expect(config.length).toBeGreaterThan(0);
    expect(configDOM.name).toEqual(undefined);
    expect(configDOM.rules).toBeTypeOf("object");
  });
});
