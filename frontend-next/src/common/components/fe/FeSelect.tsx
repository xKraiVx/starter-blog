import { FormControl, MenuItem, Select } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { JSX } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IFeSelectProps {
  id?: string;
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export default function FeSelect({
  id,
  name,
  options,
  label,
}: IFeSelectProps): JSX.Element {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <Select
            MenuProps={{
              PaperProps: {
                style: {
                  zIndex: zIndex.modal + 1,
                },
              },
            }}
            inputProps={{ "aria-label": "Without label" }}
            displayEmpty={true}
            id={id ?? name}
            {...field}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}
