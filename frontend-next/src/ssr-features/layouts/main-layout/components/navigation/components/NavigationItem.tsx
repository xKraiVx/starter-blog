import { Link, LinkProps } from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";

export default function NavigationItem({
  children,
  ...props
}: LinkProps): JSX.Element {
  return (
    <Link
      component={NextLink}
      {...props}
      variant="body1"
      sx={{
        textDecoration: "none",
        transition: "opacity 0.3s",
        textTransform: "uppercase",
        "&:hover": { opacity: 0.7 },
      }}
    >
      {children}
    </Link>
  );
}
