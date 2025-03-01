import { TMaybe } from "@/common/types/general-types.type";
import { format } from "date-fns";

export const defaultFormatDate = (date: TMaybe<string>): string => {
  if (!date) {
    return "-";
  }

  return format(new Date(date), "dd MMM yyyy");
};
