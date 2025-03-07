import {
  ERROR,
  GREY,
  SECONDARY,
} from "@/providers/blog-theme-provider/constants/palette";
import { colors, Theme } from "@mui/material";

export const TextField: Theme["components"] = {
  MuiFilledInput: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        "&:before": {
          borderColor: SECONDARY.main,
        },
        "&:hover:before, &.Mui-focused:before": {
          borderBottom: SECONDARY.light,
        },

        "&.Mui-error:before": {
          borderBottom: ERROR.main,
        },
      },
      input: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0px 1000px ${GREY[800]} inset`, // Background fix
          backgroundColor: "transparent !important", // Ensures autofill color matches
          color: `${SECONDARY.main} !important`, // Ensures text remains white
          WebkitTextFillColor: `${SECONDARY.main} !important`, // Ensures text remains white
          caretColor: `${SECONDARY.main} !important`,
        },
      },
    },
  },
};
