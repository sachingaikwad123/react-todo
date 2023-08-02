import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Basic app tests", () => {
  it("renders App with title", () => {
    render(<App />);
    const linkElement = screen.getByText("My Todo Application");
    expect(linkElement).toBeInTheDocument();
  });
});
