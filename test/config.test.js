import { describe, it, expect } from "vitest";
import config from "../lib/index.js";

describe("Config object", () => {
  it("should export rules", () => {
    expect(Array.isArray(config)).toBeTruthy();
    expect(config.length).toBeGreaterThan(0);
    expect(config).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.stringMatching(/mlauffer-nodejs$/),
        }),
        expect.objectContaining({ name: "mlauffer-ui5" }),
      ]),
    );
  });
});
