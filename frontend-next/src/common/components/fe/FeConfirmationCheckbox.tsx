import { JSX } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IFeConfirmationCheckboxProps {
  name: string;
  message?: string;
}

export default function FeConfirmationCheckbox({
  name,
  message = "I agree to the terms and conditions",
}: IFeConfirmationCheckboxProps): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl error={!!errors[name]}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={!!field.value} />}
            label={message}
          />
        )}
      />
      {errors[name] && (
        <FormHelperText>{errors[name]?.message as string}</FormHelperText>
      )}
    </FormControl>
  );
}
