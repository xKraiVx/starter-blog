"use client";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Box, Button, Stack, SxProps } from "@mui/material";
import { JSX } from "react";
import FeTextField from "@/common/components/fe/FeTextField";
import FeSelect from "@/common/components/fe/FeSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { CALL_TO_ACTION_VALIDATION_SCHEMA } from "@/features/call-to-action/constants/callToActionValidationSchema";
import { ICallToActionInput } from "@/features/call-to-action/types/callToActionInput";
import FeConfirmationCheckbox from "@/common/components/fe/FeConfirmationCheckbox";
import { CALL_TO_ACTION_SELECT_OPTIONS } from "@/features/call-to-action/constants/callToActionSelectOptions";
import { CALL_TO_ACTION_DEFAULT_VALUES } from "@/features/call-to-action/constants/callToActionDefaultValues";
import { useCreateMessage } from "@/features/call-to-action/hooks/useCreateMessage";

interface ICallToActionProps {
  sx?: SxProps;
}

export default function CallToAction({ sx }: ICallToActionProps): JSX.Element {
  const methods = useForm<ICallToActionInput>({
    resolver: yupResolver(CALL_TO_ACTION_VALIDATION_SCHEMA),
    defaultValues: CALL_TO_ACTION_DEFAULT_VALUES,
  });

  const { reset } = methods;

  const onCompleted = () => {
    reset();
  };

  const { mutate, isLoading } = useCreateMessage(onCompleted);

  const onSubmit: SubmitHandler<ICallToActionInput> = (data) => {
    mutate({ data });
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" sx={sx} onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <FeTextField label="First Name" name="firstName" />
          <FeTextField label="Last Name" name="lastName" />
          <FeTextField label="Email" name="email" />
          <FeSelect
            name="messageType"
            label="Message Type"
            options={CALL_TO_ACTION_SELECT_OPTIONS}
          />
          <FeTextField label="Message" multiline={true} name="text" />
          <FeConfirmationCheckbox name="confirmationConditions" />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            loading={isLoading}
          >
            Send
          </Button>
        </Stack>
      </Box>
    </FormProvider>
  );
}
