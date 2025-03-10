import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import UiSocialLink from "@/common/components/ui/ui-social-link/UiSocialLink";
import { FooterForMainLayoutFragment } from "@/ssr-features/layouts/main-layout/graphql/queries/getMainLayout.generated";
import { Box, Typography } from "@mui/material";
import { JSX } from "react";

interface IFooterProps {
  data: FooterForMainLayoutFragment;
}

export default function Footer({ data }: IFooterProps): JSX.Element {
  return (
    <UiSectionContainer
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
        flexDirection: { xs: "column", md: "row" },
        py: 4,
      }}
    >
      <Typography
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {data.rights}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        {data.socials?.map((social) => (
          <UiSocialLink
            key={social?.id}
            href={social?.url}
            type={social?.icon}
          />
        ))}
      </Box>
    </UiSectionContainer>
  );
}
