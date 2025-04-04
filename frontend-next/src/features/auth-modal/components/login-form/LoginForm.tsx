import FeTextField from "@/common/components/fe/FeTextField";
import { LOGIN_DEFAULT_VALUES } from "@/features/auth-modal/constants/loginDefaultValues";
import { LOGIN_VALIDATION_SCHEMA } from "@/features/auth-modal/constants/loginValidationSchema";
import { UsersPermissionsLoginInput } from "@/graphql/graphql-generated-types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack } from "@mui/material";
import { JSX } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "@/features/auth-modal/hooks/useLogin";

interface LoginFormProps {
  onClose: VoidFunction;
}

export default function LoginForm({ onClose }: LoginFormProps): JSX.Element {
  const methods = useForm<UsersPermissionsLoginInput>({
    resolver: yupResolver(LOGIN_VALIDATION_SCHEMA),
    defaultValues: LOGIN_DEFAULT_VALUES,
  });

  const { login, isLoading } = useLogin(onClose);

  const onSubmit: SubmitHandler<UsersPermissionsLoginInput> = (data) => {
    login({ input: data });
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
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
            >
              Login
            </Button>
          </Box>
        </Stack>
      </Box>
    </FormProvider>
  );
}
