import { Enum_Message_Messagetype } from "@/graphql/graphql-generated-types/types";

export const CALL_TO_ACTION_DEFAULT_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  messageType: Enum_Message_Messagetype.Question,
  confirmationConditions: false,
  text: "",
};
