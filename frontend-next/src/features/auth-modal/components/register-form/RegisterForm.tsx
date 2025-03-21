import FeTextField from "@/common/components/fe/FeTextField";
import { UsersPermissionsRegisterInput } from "@/graphql/graphql-generated-types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack } from "@mui/material";
import { JSX, useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useRegister } from "@/features/auth-modal/hooks/useRegister";
import { REGISTER_DEFAULT_VALUES } from "@/features/auth-modal/constants/registerDefaultValues";
import { REGISTER_VALIDATION_SCHEMA } from "@/features/auth-modal/constants/registerValidationSchema";

interface RegisterFormProps {
  onClose: VoidFunction;
}

export default function RegisterForm({
  onClose,
}: RegisterFormProps): JSX.Element {
  const methods = useForm<UsersPermissionsRegisterInput>({
    resolver: yupResolver(REGISTER_VALIDATION_SCHEMA),
    defaultValues: REGISTER_DEFAULT_VALUES,
  });

  const { watch } = methods;

  const email = watch("email");

  const { register, isLoading } = useRegister(onClose);

  const onSubmit: SubmitHandler<UsersPermissionsRegisterInput> = (data) => {
    register({ input: data });
  };

  useEffect(() => {
    if (email) {
      const username = email.split("@")?.[0] || "";
      methods.setValue("username", username);
    }
  }, [email]);

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <FeTextField label="Email" name="email" />
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
