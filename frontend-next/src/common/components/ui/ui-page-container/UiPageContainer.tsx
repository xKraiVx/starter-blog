import { Container, ContainerProps } from "@mui/material";
import { JSX } from "react";

export default function UiPageContainer({
  children,
  sx,
  ...props
}: ContainerProps): JSX.Element {
  return (
    <Container
      sx={{
        marginTop: 2,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}
