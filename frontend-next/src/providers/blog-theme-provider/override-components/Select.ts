import { SECONDARY } from "@/providers/blog-theme-provider/constants/palette";
import { Theme } from "@mui/material";

export const Select: Theme["components"] = {
  MuiSelect: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-notchedOutline": {
          tansition: "all 0.2s",
          borderColor: SECONDARY.main,
        },
        "& .MuiSelect-icon": {
          color: SECONDARY.main,
        },
        "&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: SECONDARY.light,
          },
        "&:hover .MuiSelect-icon, &.Mui-focused .MuiSelect-icon": {
          color: SECONDARY.light,
        },
      },
    },
  },
};
