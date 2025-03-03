import { MenuItem, Select } from "@mui/material";
import { JSX } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IFeSelectProps {
  name: string;
  options: { value: string; label: string }[];
}

function FeSelect({ name, options }: IFeSelectProps): JSX.Element {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...field} label="Type">
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
}

export default FeSelect;
