import React from "react";

import { render, screen } from "@testing-library/react";

import { MyComponent } from "../MyComponent";

test("renders hello message", () => {
  render(<MyComponent />);

  expect(screen.getByText(/hello from react/i)).toBeInTheDocument();
});
