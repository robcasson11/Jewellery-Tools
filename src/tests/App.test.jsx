import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

it("App renders all inputs provided by data", () => {
  render(<App />);
  const sil = screen.queryByTitle(/sil/);
  const gold = screen.queryByTitle(/gold/);
  const plat = screen.queryByTitle(/plat/);
  const wax = screen.queryByTitle(/wax/);
  expect(sil, gold, plat, wax).toBeVisible();
});
