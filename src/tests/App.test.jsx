import { expect } from "vitest";
import { convert } from "../App";

test("Checks the value of the 'Plat' input to be '16.60'", () => {
  expect(convert("gold", 10)).toHaveValue("16.60");
});
