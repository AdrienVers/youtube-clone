import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Account from "./Account";

test("Password characters are masked", () => {
  render(<Account />);
  const passwordInput = screen.getByLabelText(/Mot de passe/i);
  expect(passwordInput).toHaveValue("");
  userEvent.type(passwordInput, "a");
  expect(passwordInput).toHaveValue("a");
  expect(passwordInput.type).toBe("password");
});

test("When we click on email label, email input should be selected", () => {
  render(<Account />);
  const labelEmail = screen.getByLabelText(/Email/i);
  userEvent.click(labelEmail);
  const email = screen.getByRole("textbox", { name: /email/i });
  expect(email).toHaveFocus();
});

test("When we click on submit button", () => {
  const mockSubmission = jest.fn();
  render(<Account submission={mockSubmission} />);
  const emailInput = screen.getByLabelText(/Email/i);
  userEvent.type(emailInput, "test@example.org");
  const passwordInput = screen.getByLabelText(/Mot de passe/i);
  userEvent.type(passwordInput, "password");
  const submitButton = screen.getByRole("button", {
    name: /Se connecter/i,
  });
  fireEvent.click(submitButton);
  expect(mockSubmission.mock.calls.length).toBe(1);
  expect(mockSubmission.mock.calls[0][0]).toEqual({
    email: "test@example.org",
    password: "password",
  });
});
