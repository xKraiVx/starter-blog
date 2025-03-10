import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import { Button, Typography } from "@mui/material";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <UiSectionContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        height: {
          xs: "calc(100vh - 160px)",
          md: "calc(100vh - 104px)",
        },
      }}
    >
      <Typography variant="h1">Not Found</Typography>
      <Typography>Could not find requested resource</Typography>
      <Button LinkComponent={NextLink} href="/" variant="contained">
        Return Home
      </Button>
    </UiSectionContainer>
  );
}
