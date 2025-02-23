import { Container, ContainerProps } from "@mui/material";
import { JSX } from "react";

export default function UiSectionContainer({
  children,
  sx,
  ...props
}: ContainerProps): JSX.Element {
  return (
    <Container maxWidth="xl" sx={{ py: { md: 20, xs: 10 }, ...sx }} {...props}>
      {children}
    </Container>
  );
}
