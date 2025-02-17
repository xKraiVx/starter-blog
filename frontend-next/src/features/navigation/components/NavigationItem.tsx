import { Link, LinkProps } from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";

export default function NavigationItem({
  children,
  ...props
}: LinkProps): JSX.Element {
  return (
    <Link component={NextLink} {...props}>
      {children}
    </Link>
  );
}
