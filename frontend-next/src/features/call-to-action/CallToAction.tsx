"use client";

import { useForm, SubmitHandler, Form, Controller } from "react-hook-form";
import { Button, MenuItem, Select, Stack } from "@mui/material";
import { JSX } from "react";
import {
  Enum_Message_Messagetype,
  MessageInput,
} from "@/graphql/graphql-generated-types/types";
import FeTextField from "@/common/components/fe/FeTextField";

export default function CallToAction(): JSX.Element {
  const { register, control } = useForm<MessageInput>({
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

  return (
    <Form onSubmit={({ data }) => onSubmit(data)} control={control}>
      <Stack gap={2}>
        <FeTextField label="First Name" {...register("firstName")} />
        <FeTextField label="Last Name" {...register("lastName")} />
        <FeTextField label="Email" {...register("email")} />
        <Controller
          name="messageType"
          control={control}
          render={({ field }) => (
            <Select {...field} label="Type">
              <MenuItem value={Enum_Message_Messagetype.Question}>
                Question
              </MenuItem>
              <MenuItem value={Enum_Message_Messagetype.Bug}>Bug</MenuItem>
              <MenuItem value={Enum_Message_Messagetype.Other}>Other</MenuItem>
            </Select>
          )}
        />
        <FeTextField label="Messege" multiline={true} {...register("text")} />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </Stack>
    </Form>
  );
}
