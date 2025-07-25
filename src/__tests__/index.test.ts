import { greet } from "../index";

describe("greet", () => {
  it("returns the correct greeting", () => {
    expect(greet("Manish")).toBe("Hello, Manish");
  });
});
