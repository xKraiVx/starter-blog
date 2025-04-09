import "@testing-library/jest-dom";
import RegisterForm from "@/features/auth-modal/components/register-form/RegisterForm";
import { render, fireEvent, act } from "@testing-library/react";

const TEST_IDS = {
  email: "email",
  password: "password",
  passwordConfirm: "passwordConfirm",
  submitButton: "submit-button",
  cancelButton: "Cancel",
};

const VALIDATION_MESSAGES = {
  emailRequired: "Email is required",
  passwordRequired: "Password is required",
  confirmPasswordRequired: "Confirm password is required",
  passwordsDoNotMatch: "Passwords must match",
};

describe("RegisterForm", () => {
  it("should render the register form", () => {
    const { container } = render(<RegisterForm onSubmit={() => {}} />);

    expect(container).toBeInTheDocument();
  });

  it("should have fields and submit button", () => {
    const { getByTestId } = render(<RegisterForm onSubmit={() => {}} />);

    expect(getByTestId(TEST_IDS.email)).toBeInTheDocument();
    expect(getByTestId(TEST_IDS.password)).toBeInTheDocument();
    expect(getByTestId(TEST_IDS.passwordConfirm)).toBeInTheDocument();
    expect(getByTestId(TEST_IDS.submitButton)).toBeInTheDocument();
  });

  it("should have appropriate types", () => {
    const { getByTestId } = render(<RegisterForm onSubmit={() => {}} />);

    const emailInput = getByTestId(TEST_IDS.email);
    const passwordInput = getByTestId(TEST_IDS.password);
    const confirmPasswordInput = getByTestId(TEST_IDS.passwordConfirm);

    expect(emailInput).toHaveAttribute("type", "email");
    expect(passwordInput).toHaveAttribute("type", "password");
    expect(confirmPasswordInput).toHaveAttribute("type", "password");
  });

  it("should call onClose when cancel button is clicked", () => {
    const handleClose = jest.fn();

    const { getByText } = render(
      <RegisterForm onClose={handleClose} onSubmit={() => {}} />
    );

    const cancelButton = getByText(TEST_IDS.cancelButton);

    act(() => {
      fireEvent.click(cancelButton);
    });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should show validation errors when fields are empty", async () => {
    const { getByTestId, findByText } = render(
      <RegisterForm onSubmit={() => {}} />
    );

    const submitButton = getByTestId(TEST_IDS.submitButton);

    act(() => {
      fireEvent.click(submitButton);
    });

    expect(
      await findByText(VALIDATION_MESSAGES.emailRequired)
    ).toBeInTheDocument();
    expect(
      await findByText(VALIDATION_MESSAGES.passwordRequired)
    ).toBeInTheDocument();
    expect(
      await findByText(VALIDATION_MESSAGES.confirmPasswordRequired)
    ).toBeInTheDocument();
  });

  it("should call onSubmit with correct data", () => {
    const email = "test@test.com";
    const password = "Qwerty123-";
    const username = "test";

    const handleSubmit = jest.fn((data) => {
      expect(data).toEqual({
        email,
        password,
        username,
      });
    });

    const { getByTestId } = render(<RegisterForm onSubmit={handleSubmit} />);

    const emailInput = getByTestId(TEST_IDS.email);
    const passwordInput = getByTestId(TEST_IDS.password);
    const confirmPasswordInput = getByTestId(TEST_IDS.passwordConfirm);
    const submitButton = getByTestId(TEST_IDS.submitButton);

    act(() => {
      fireEvent.change(emailInput, { target: { value: email } });
      fireEvent.change(passwordInput, { target: { value: password } });
      fireEvent.change(confirmPasswordInput, { target: { value: password } });
    });

    act(() => {
      fireEvent.click(submitButton);
    });
  });

  it("should show error if passwords do not match", async () => {
    const handleSubmit = jest.fn();

    const { getByTestId, findByText } = render(
      <RegisterForm onSubmit={handleSubmit} />
    );

    const passwordInput = getByTestId(TEST_IDS.password);
    const confirmPasswordInput = getByTestId(TEST_IDS.passwordConfirm);
    const submitButton = getByTestId(TEST_IDS.submitButton);

    act(() => {
      fireEvent.change(passwordInput, { target: { value: "Password123" } });
      fireEvent.change(confirmPasswordInput, {
        target: { value: "Password456" },
      });
    });

    act(() => {
      fireEvent.click(submitButton);
    });

    expect(
      await findByText(VALIDATION_MESSAGES.passwordsDoNotMatch)
    ).toBeInTheDocument();
  });
});
