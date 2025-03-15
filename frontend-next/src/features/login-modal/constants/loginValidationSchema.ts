import * as yup from "yup";

export const LOGIN_VALIDATION_SCHEMA = yup.object().shape({
  identifier: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/(?=.*[0-9])/, "Password must contain at least one number")
    .matches(
      /(?=.*[!@#\$%\^&*\-])/,
      "Password must contain at least one symbol"
    )
    .matches(
      /(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    ),
});
