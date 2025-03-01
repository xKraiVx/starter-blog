export const Button = {
  MuiButton: {
    styleOverrides: {
      root: {
        padding: "8px 16px",
        boxShadow: "none",
        borderRadius: 0,
        "&.Mui-focusVisible": {
          boxShadow: "none",
        },
        "&:hover": { boxShadow: "none" },
      },
    },
  },
};
