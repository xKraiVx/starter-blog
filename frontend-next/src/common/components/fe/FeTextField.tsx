import { TextField, TextFieldProps } from "@mui/material";
import { JSX } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FeTextFieldProps extends Omit<TextFieldProps, "name"> {
  name: string;
}

export default function FeTextField({
  name,
  id,
  ...props
}: FeTextFieldProps): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          id={id ?? name}
          variant="filled"
          {...field}
          {...props}
          error={!!errors[name]}
          helperText={errors[name] ? (errors[name]?.message as string) : ""}
        />
      )}
    />
  );
}
