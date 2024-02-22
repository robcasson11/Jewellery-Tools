import { expect, test } from "vitest";
import sum, { secondSum } from "../convert";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Subtracts 1 from 2 to equal 1", () => {
  expect(secondSum(1, 2)).toBe(-1);
});
