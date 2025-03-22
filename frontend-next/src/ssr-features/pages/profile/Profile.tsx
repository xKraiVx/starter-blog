"use client";

import UiPageContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import UiPageTitle from "@/common/components/ui/ui-page-title/UiPageTitle";
import { JSX } from "react";
import { useGetMe } from "@/common/hooks/useGetMe";
import { Box, Typography } from "@mui/material";

export default function Profile(): JSX.Element {
  const { data } = useGetMe();

  return (
    <UiPageContainer>
      <UiPageTitle>Profile</UiPageTitle>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography variant="bodyXl">ID:</Typography>
        <Typography variant="subtitle1">{data?.id}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography variant="bodyXl">Email:</Typography>
        <Typography variant="subtitle1">{data?.email}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography variant="bodyXl">Role:</Typography>
        <Typography variant="subtitle1">{data?.role?.name}</Typography>
      </Box>
    </UiPageContainer>
  );
}
