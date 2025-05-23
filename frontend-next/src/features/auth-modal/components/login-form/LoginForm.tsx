import FeTextField from "@/common/components/fe/FeTextField";
import { LOGIN_DEFAULT_VALUES } from "@/features/auth-modal/constants/loginDefaultValues";
import { LOGIN_VALIDATION_SCHEMA } from "@/features/auth-modal/constants/loginValidationSchema";
import { UsersPermissionsLoginInput } from "@/graphql/graphql-generated-types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack } from "@mui/material";
import { JSX } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface LoginFormProps {
  onSubmit: (data: UsersPermissionsLoginInput) => void;
  isLoading?: boolean;
  onClose?: VoidFunction;
}

export default function LoginForm({
  isLoading,
  onSubmit,
  onClose,
}: LoginFormProps): JSX.Element {
  const methods = useForm<UsersPermissionsLoginInput>({
    resolver: yupResolver(LOGIN_VALIDATION_SCHEMA),
    defaultValues: LOGIN_DEFAULT_VALUES,
  });

  const onLogin: SubmitHandler<UsersPermissionsLoginInput> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onLogin)}>
        <Stack gap={2}>
          <FeTextField label="Email" name="identifier" />
          <FeTextField label="Password" name="password" type="password" />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button onClick={onClose} variant="outlined" color="primary">
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              loading={isLoading}
              data-testid="submit-button"
            >
              Login
            </Button>
          </Box>
        </Stack>
      </Box>
    </FormProvider>
  );
}
