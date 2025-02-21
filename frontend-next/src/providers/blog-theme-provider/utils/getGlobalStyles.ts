import { GlobalStylesProps } from "@mui/material";

export const getGlobalStyles = (
  scrollColor: string
): GlobalStylesProps["styles"] => {
  return {
    html: {
      scrollBehavior: "smooth",
    },
    "html::-webkit-scrollbar": {
      height: "12px",
      width: "12px",
      background: "transparent",
    },
    "html::-webkit-scrollbar-thumb": {
      background: scrollColor,
      borderRadius: "6px",
    },
    "html::-webkit-scrollbar-corner": {
      background: "transparent",
    },
  };
};
