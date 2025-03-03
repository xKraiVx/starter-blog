"use client";

import {
  useForm,
  SubmitHandler,
  Form,
  Controller,
  FormProvider,
} from "react-hook-form";
import { Button, MenuItem, Select, Stack } from "@mui/material";
import { JSX } from "react";
import {
  Enum_Message_Messagetype,
  MessageInput,
} from "@/graphql/graphql-generated-types/types";
import FeTextField from "@/common/components/fe/FeTextField";
import FeSelect from "@/common/components/fe/FeSelect";

export default function CallToAction(): JSX.Element {
  const methods = useForm<MessageInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      messageType: Enum_Message_Messagetype.Question,
      text: "",
    },
  });

  const onSubmit: SubmitHandler<MessageInput> = (data) => {
    console.log(data);
  };

  const SELECT_OPTIONS = [
    { value: Enum_Message_Messagetype.Question, label: "Question" },
    { value: Enum_Message_Messagetype.Bug, label: "Bug" },

    { value: Enum_Message_Messagetype.Other, label: "Other" },
  ];

  return (
    <FormProvider {...methods}>
      <Form onSubmit={({ data }) => onSubmit(data)}>
        <Stack gap={2}>
          <FeTextField label="First Name" name="firstName" />
          <FeTextField label="Last Name" name="lastName" />
          <FeTextField label="Email" name="email" />
          <FeSelect name="messageType" options={SELECT_OPTIONS} />
          <FeTextField label="Message" multiline={true} name="message" />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </Stack>
      </Form>
    </FormProvider>
  );
}
