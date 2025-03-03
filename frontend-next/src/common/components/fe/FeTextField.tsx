import { TextField, TextFieldProps } from "@mui/material";
import { JSX } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function FeTextField({
  name,
  id,
  ...props
}: TextFieldProps): JSX.Element {
  const { control } = useFormContext();
  return (
    <Controller
      name={name || ""}
      control={control}
      render={({ field }) => (
        <TextField id={id ?? name} {...field} {...props} />
      )}
    />
  );
}
