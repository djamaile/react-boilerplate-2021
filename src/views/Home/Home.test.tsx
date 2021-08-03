import { render, screen } from "@testing-library/react";
import Home from "./Home";

/**
 * @jest-environment jsdom
 */

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
