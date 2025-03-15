import FeTextField from "@/common/components/fe/FeTextField";
import { useLogin } from "@/features/login-modal/hooks/useLogin";
import { UsersPermissionsLoginInput } from "@/graphql/graphql-generated-types/types";
import { Box, Button, Stack } from "@mui/material";
import { JSX } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface LoginFormProps {
  onClose: VoidFunction;
}

export default function LoginForm({ onClose }: LoginFormProps): JSX.Element {
  const methods = useForm<UsersPermissionsLoginInput>({
    defaultValues: {
      identifier: "",
      password: "",
    },
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
