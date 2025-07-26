import { generateRandomString } from "../funcs";

describe("Utility Functions", () => {
  describe("generateRandomString", () => {
    it("generates string with specified length", () => {
      const length = 10;
      const result = generateRandomString(length);
      expect(result.length).toBe(length);
      expect(typeof result).toBe("string");
    });

    it("generates string with different length", () => {
      const length = 15;
      const result = generateRandomString(length);
      expect(result.length).toBe(length);
    });

    it("generates unique strings", () => {
      const length = 10;
      const str1 = generateRandomString(length);
      const str2 = generateRandomString(length);
      expect(str1).not.toBe(str2);
    });

    it("handles minimum length", () => {
      const length = 1;
      const result = generateRandomString(length);
      expect(result.length).toBe(length);
    });

    it("generates alphanumeric strings", () => {
      const length = 20;
      const result = generateRandomString(length);
      expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });
  });
});
