import { TextField, TextFieldProps } from "@mui/material";
import { JSX } from "react";

export default function FeTextField({
  name,
  id,
  ...props
}: TextFieldProps): JSX.Element {
  return (
    <TextField id={id ?? name} name={name} variant="standard" {...props} />
  );
}
