import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import HeaderActions from "@/ssr-features/layouts/main-layout/components/header/HeaderActions";
import HeaderWrapper from "@/ssr-features/layouts/main-layout/components/header/HeaderWrapper";
import Logo from "@/ssr-features/layouts/main-layout/components/logo/Logo";
import MobileMenu from "@/ssr-features/layouts/main-layout/components/mobile-menu/MobileMenu";
import Navigation from "@/ssr-features/layouts/main-layout/components/navigation/Navigation";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <HeaderWrapper>
      <UiSectionContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: {
            xs: 2,
            md: 4,
          },
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Navigation
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          />
          <MobileMenu />
          <HeaderActions />
        </Box>
      </UiSectionContainer>
    </HeaderWrapper>
  );
}
