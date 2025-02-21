import { Box, Container, Typography } from "@mui/material";
import { JSX } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { HeroWidgetFragment } from "@/ssr-features/graphql/fragments/heroWidget.generated";
import { getImageUrl } from "@/common/utils/getImageUrl";

interface IHeroWidgetProps {
  data: HeroWidgetFragment;
}

export default function HeroWidget({ data }: IHeroWidgetProps): JSX.Element {
  const { title, description, backgroundImage } = data;

  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `url(${getImageUrl(backgroundImage?.url)})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.8)",
      }}
    >
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography variant="h2">{title}</Typography>
        <BlocksRenderer content={description} />
      </Container>
    </Box>
  );
}
