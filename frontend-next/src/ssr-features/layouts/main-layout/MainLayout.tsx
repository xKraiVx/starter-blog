import Header from "@/ssr-features/layouts/main-layout/components/header/Header";
import { Box } from "@mui/material";
import { JSX, PropsWithChildren } from "react";

export default function MainLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
}
