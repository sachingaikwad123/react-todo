import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import Todo from "./Todo";
import userEvent from "@testing-library/user-event";

describe("Todo application tests", () => {
  it("Check if input box is rendered on the page", () => {
    // Arrange.
    render(<Todo />);

    // Act.
    const inputElement = screen.getByRole("textbox");

    // Assert.
    expect(inputElement).toBeInTheDocument();
  });

  it("When user adds a new item, it is added to the list", async () => {
    // Arrange.
    render(<Todo />);

    // Act.
    const inputElement = screen.getByRole("textbox");
    act(() => {
      userEvent.type(inputElement, "buy some milk");
      userEvent.type(inputElement, "{enter}");
    });

    // Assert.
    await waitFor(() => {
      expect(screen.getByText("buy some milk")).toBeInTheDocument();
    });
  });
});
