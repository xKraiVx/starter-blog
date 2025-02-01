import Navigation from "@/features/navigation/Navigation";
import { Box } from "@mui/material";
import { JSX, PropsWithChildren } from "react";

export default function MainLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <Box>
      <Navigation />
      {children}
    </Box>
  );
}
