import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "@/features/auth-modal/components/login-form/LoginForm";
import SessionProvider from "@/providers/session-provider/SessionProvider";
import { ReactQueryProvider } from "@/providers/react-query-provider/ReactQueryProvider";

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
});
