import { Enum_Message_Messagetype } from "@/graphql/graphql-generated-types/types";

export interface ICallToActionInput {
  confirmationConditions: boolean;
  email: string;
  firstName: string;
  lastName: string;
  messageType: Enum_Message_Messagetype;
  text: string;
}
