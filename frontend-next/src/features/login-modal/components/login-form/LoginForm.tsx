import FeTextField from "@/common/components/fe/FeTextField";
import { LOGIN_DEFAULT_VALUES } from "@/features/login-modal/constants/loginDefaultValues";
import { LOGIN_VALIDATION_SCHEMA } from "@/features/login-modal/constants/loginValidationSchema";
import { useLogin } from "@/features/login-modal/hooks/useLogin";
import { UsersPermissionsLoginInput } from "@/graphql/graphql-generated-types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack } from "@mui/material";
import { JSX } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface LoginFormProps {
  onClose: VoidFunction;
}

export default function LoginForm({ onClose }: LoginFormProps): JSX.Element {
  const methods = useForm<UsersPermissionsLoginInput>({
    resolver: yupResolver(LOGIN_VALIDATION_SCHEMA),
    defaultValues: LOGIN_DEFAULT_VALUES,
  });

  const { reset } = methods;
  const onCompleted = () => {
    reset();
    onClose();
  };

  const { login, isLoading } = useLogin(onCompleted);

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
