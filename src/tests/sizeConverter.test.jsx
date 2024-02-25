import { expect, test } from "vitest";
import sizeConverter from "../functions/sizeConverter";

test("Find the index of the size 'K 1/2' from the array of sizes in the 'UK' object from the sizeConversionData", () => {
  expect(sizeConverter("UK", "K½")).toBe(10);
});
