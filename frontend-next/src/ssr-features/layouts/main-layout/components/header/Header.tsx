import Logo from "@/ssr-features/layouts/main-layout/components/logo/Logo";
import MobileMenu from "@/ssr-features/layouts/main-layout/components/mobile-menu/MobileMenu";
import Navigation from "@/ssr-features/layouts/main-layout/components/navigation/Navigation";
import { Container } from "@mui/material";

export default function Header() {
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between", py: 4 }}>
      <Logo />
      <Navigation
        sx={{
          display: {
            md: "flex",
            xs: "none",
          },
        }}
      />
      <MobileMenu />
    </Container>
  );
}
