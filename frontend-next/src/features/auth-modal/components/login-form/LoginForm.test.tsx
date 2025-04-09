import "@testing-library/jest-dom";
import LoginForm from "@/features/auth-modal/components/login-form/LoginForm";
import { render, fireEvent, act } from "@testing-library/react";

const TEST_IDS = {
  identifier: "identifier",
  password: "password",
  submitButton: "submit-button",
};

const BUTTON_TEXT = {
  cancel: "Cancel",
};

const VALIDATION_ERRORS = {
  emailRequired: "Email is required",
  passwordRequired: "Password is required",
};

describe("LoginForm", () => {
  it("should render the login form", () => {
    const { container } = render(<LoginForm onSubmit={() => {}} />);

    expect(container).toBeInTheDocument();
  });

  it("should have fields and submit button", () => {
    const { getByTestId } = render(<LoginForm onSubmit={() => {}} />);

    expect(getByTestId(TEST_IDS.identifier)).toBeInTheDocument();
    expect(getByTestId(TEST_IDS.password)).toBeInTheDocument();
    expect(getByTestId(TEST_IDS.submitButton)).toBeInTheDocument();
  });

  it("should have appropriate types", () => {
    const { getByTestId } = render(<LoginForm onSubmit={() => {}} />);

    const identifierInput = getByTestId(TEST_IDS.identifier);
    const passwordInput = getByTestId(TEST_IDS.password);

    expect(identifierInput).toHaveAttribute("type", "text");
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should call onClose when cancel button is clicked", () => {
    const handleClose = jest.fn();

    const { getByText } = render(
      <LoginForm onClose={handleClose} onSubmit={() => {}} />
    );

    const cancelButton = getByText(BUTTON_TEXT.cancel);

    act(() => {
      fireEvent.click(cancelButton);
    });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should show validation errors when fields are empty", async () => {
    const { getByTestId, findByText } = render(
      <LoginForm onSubmit={() => {}} />
    );

    const submitButton = getByTestId(TEST_IDS.submitButton);

    act(() => {
      fireEvent.click(submitButton);
    });

    expect(
      await findByText(VALIDATION_ERRORS.emailRequired)
    ).toBeInTheDocument();
    expect(
      await findByText(VALIDATION_ERRORS.passwordRequired)
    ).toBeInTheDocument();
  });

  it("should call onSubmit with correct data", () => {
    const identifier = "test@test.com";
    const password = "Qwerty123-";

    const handleSubmit = jest.fn((data) => {
      expect(data).toEqual({
        identifier,
        password,
      });
    });

    const { getByTestId } = render(<LoginForm onSubmit={handleSubmit} />);

    const identifierInput = getByTestId(TEST_IDS.identifier);
    const passwordInput = getByTestId(TEST_IDS.password);
    const submitButton = getByTestId(TEST_IDS.submitButton);

    act(() => {
      fireEvent.change(identifierInput, { target: { value: identifier } });
      fireEvent.change(passwordInput, { target: { value: password } });
    });

    act(() => {
      fireEvent.click(submitButton);
    });
  });
});
