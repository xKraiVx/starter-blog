import { Enum_Message_Messagetype } from "@/graphql/graphql-generated-types/types";

export const CALL_TO_ACTION_SELECT_OPTIONS = [
  { value: Enum_Message_Messagetype.Question, label: "Question" },
  { value: Enum_Message_Messagetype.Bug, label: "Bug" },

  { value: Enum_Message_Messagetype.Other, label: "Other" },
];
