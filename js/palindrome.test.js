import { it, expect } from "vitest";
import palindrome from "./palindrome";

it("should return true for the base cases", () => {
  const case1 = ""; // 0 character long string
  const case2 = " "; // 1 character long string

  const result1 = palindrome(case1);
  const result2 = palindrome(case2);

  expect(result1).toBe(true);
  expect(result2).toBe(true);
});

it("should return true for a valid palindrome", () => {
  const str = "racecar";
  const result = palindrome(str);
  expect(result).toBe(true);
});

it("should return false for an invalid palindrome", () => {
  const str = "invalid";
  const result = palindrome(str);
  expect(result).toBe(false);
});
