import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import HeaderWrapper from "@/ssr-features/layouts/main-layout/components/header/HeaderWrapper";
import Logo from "@/ssr-features/layouts/main-layout/components/logo/Logo";
import MobileMenu from "@/ssr-features/layouts/main-layout/components/mobile-menu/MobileMenu";
import Navigation from "@/ssr-features/layouts/main-layout/components/navigation/Navigation";

export default function Header() {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
}
