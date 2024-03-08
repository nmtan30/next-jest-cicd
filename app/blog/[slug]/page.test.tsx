/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it('Tan Nguyen should be show', () => {
  render(<Page params={{ slug: 'Test' }} />);
  expect(screen.getByText('Tan Nguyen')).toBeInTheDocument();
})