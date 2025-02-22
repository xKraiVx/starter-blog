import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import Logo from "@/ssr-features/layouts/main-layout/components/logo/Logo";
import MobileMenu from "@/ssr-features/layouts/main-layout/components/mobile-menu/MobileMenu";
import Navigation from "@/ssr-features/layouts/main-layout/components/navigation/Navigation";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}
    >
      <UiSectionContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 4,
        }}
      >
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
      </UiSectionContainer>
    </Box>
  );
}
