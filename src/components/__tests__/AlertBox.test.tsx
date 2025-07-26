import React from "react";
import { render, screen } from "@testing-library/react";
import AlertBox from "../AlertBox";

describe("AlertBox", () => {
  it("renders with title and message", () => {
    render(<AlertBox title="Test Title" message="Test Message" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Message")).toBeInTheDocument();
  });

  it("renders with default error severity", () => {
    render(<AlertBox title="Test Title" />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("MuiAlert-standardError");
  });

  it("renders with custom severity", () => {
    render(<AlertBox title="Test Title" severity="success" />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("MuiAlert-standardSuccess");
  });
});
