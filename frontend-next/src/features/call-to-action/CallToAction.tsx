"use client";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Box, Button, Stack } from "@mui/material";
import { JSX } from "react";
import { Enum_Message_Messagetype } from "@/graphql/graphql-generated-types/types";
import FeTextField from "@/common/components/fe/FeTextField";
import FeSelect from "@/common/components/fe/FeSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { CALL_TO_ACTION_VALIDATION_SCHEMA } from "@/features/call-to-action/constants/callToActionValidationSchema";
import { ICallToActionInput } from "@/features/call-to-action/types/callToActionInput";
import FeConfirmationCheckbox from "@/common/components/fe/FeConfirmationCheckbox";
import { CALL_TO_ACTION_SELECT_OPTIONS } from "@/features/call-to-action/constants/callToActionSelectOptions";

export default function CallToAction(): JSX.Element {
  const methods = useForm<ICallToActionInput>({
    resolver: yupResolver(CALL_TO_ACTION_VALIDATION_SCHEMA),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      messageType: Enum_Message_Messagetype.Question,
      confirmationConditions: false,
      text: "",
    },
  });

  const onSubmit: SubmitHandler<ICallToActionInput> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <FeTextField label="First Name" name="firstName" />
          <FeTextField label="Last Name" name="lastName" />
          <FeTextField label="Email" name="email" />
          <FeSelect
            name="messageType"
            options={CALL_TO_ACTION_SELECT_OPTIONS}
          />
          <FeTextField label="Message" multiline={true} name="text" />
          <FeConfirmationCheckbox name="confirmationConditions" />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </Stack>
      </Box>
    </FormProvider>
  );
}
