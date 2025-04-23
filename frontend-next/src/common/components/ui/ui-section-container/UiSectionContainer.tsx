import { Container, ContainerProps } from "@mui/material";
import { JSX } from "react";

interface IUiSectionContainerProps extends ContainerProps {
  fullWidth?: boolean;
}

export default function UiSectionContainer({
  children,
  fullWidth,
  sx,
  ...props
}: IUiSectionContainerProps): JSX.Element {
  const wrapperStyles = fullWidth
    ? {
        py: { md: 0, xs: 0 },
        px: { md: 0, xs: 0 },
      }
    : {
        py: { md: 20, xs: 10 },
      };
  return (
    <Container
      maxWidth={fullWidth ? false : "xl"}
      sx={{
        ...wrapperStyles,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}
