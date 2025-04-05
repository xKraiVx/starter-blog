import "@testing-library/jest-dom";
import LoginForm from "@/features/auth-modal/components/login-form/LoginForm";
import SessionProvider from "@/providers/session-provider/SessionProvider";
import { ReactQueryProvider } from "@/providers/react-query-provider/ReactQueryProvider";
import { render, fireEvent } from "@testing-library/react";

describe("LoginForm", () => {
  it("should render the login form", () => {
    const { container } = render(
      <ReactQueryProvider>
        <SessionProvider>
          <LoginForm />
        </SessionProvider>
      </ReactQueryProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it("should have fields and submit button", () => {
    const { getByTestId } = render(
      <ReactQueryProvider>
        <SessionProvider>
          <LoginForm />
        </SessionProvider>
      </ReactQueryProvider>
    );

    expect(getByTestId("identifier")).toBeInTheDocument();
    expect(getByTestId("password")).toBeInTheDocument();
    expect(getByTestId("submit-button")).toBeInTheDocument();
  });

  it("should have appropriate types", () => {
    const { getByTestId } = render(
      <ReactQueryProvider>
        <SessionProvider>
          <LoginForm />
        </SessionProvider>
      </ReactQueryProvider>
    );

    const identifierInput = getByTestId("identifier");
    const passwordInput = getByTestId("password");

    expect(identifierInput).toHaveAttribute("type", "text");
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should call onClose when cancel button is clicked", () => {
    const handleClose = jest.fn();

    const { getByText } = render(
      <ReactQueryProvider>
        <SessionProvider>
          <LoginForm onClose={handleClose} />
        </SessionProvider>
      </ReactQueryProvider>
    );

    const cancelButton = getByText("Cancel");

    fireEvent.click(cancelButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should show validation errors when fields are empty", async () => {
    const { getByTestId, findByText } = render(
      <ReactQueryProvider>
        <SessionProvider>
          <LoginForm />
        </SessionProvider>
      </ReactQueryProvider>
    );

    const submitButton = getByTestId("submit-button");

    fireEvent.click(submitButton);

    expect(await findByText("Email is required")).toBeInTheDocument();
    expect(await findByText("Password is required")).toBeInTheDocument();
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

    const { getByTestId } = render(
      <ReactQueryProvider>
        <SessionProvider>
          <LoginForm onSubmit={handleSubmit} />
        </SessionProvider>
      </ReactQueryProvider>
    );

    const identifierInput = getByTestId("identifier");
    const passwordInput = getByTestId("password");
    const submitButton = getByTestId("submit-button");

    fireEvent.change(identifierInput, { target: { value: identifier } });
    fireEvent.change(passwordInput, { target: { value: password } });

    fireEvent.click(submitButton);
  });
});
