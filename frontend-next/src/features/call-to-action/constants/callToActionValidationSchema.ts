import { Enum_Message_Messagetype } from "@/graphql/graphql-generated-types/types";
import * as yup from "yup";

export const CALL_TO_ACTION_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  messageType: yup
    .mixed<Enum_Message_Messagetype>()
    .oneOf(Object.values(Enum_Message_Messagetype), "Invalid message type")
    .required("Message type is required"),
  text: yup.string().required("Message is required"),
  confirmationConditions: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required(),
});
