import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Basic app tests", () => {
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("My Todo Application");
    expect(linkElement).toBeInTheDocument();
  });

  it("checks if submit button renders on the page", () => {
    render(<App />);
    const linkElement = screen.getByText("Submit");
    expect(linkElement).toBeInTheDocument();
  });
});
