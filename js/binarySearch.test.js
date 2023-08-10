import { it, expect } from "vitest";
import binarySearch from "./binarySearch";

it("should return -1 when target is not in array", () => {
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
  const target = 20;
  const index = binarySearch(sortedArray, target, 0, 8);
  expect(index).toBe(-1);
});

it("should return the index of the target", () => {
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
  const target = 11;
  const index = binarySearch(sortedArray, target, 0, 8);
  expect(index).toBe(5);
});
