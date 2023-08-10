import { it, expect } from "vitest";
import factorial from "./factorial";

it("should return 1 when evaluating the base case", () => {
  const n = 0;
  const result = factorial(n);
  expect(result).toBe(1);
});

it("should return the factorial of a positive number", () => {
  const n = 5;
  const result = factorial(n);
  expect(result).toBe(120);
});
