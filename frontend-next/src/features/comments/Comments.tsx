"use client";

import FeTextEditor from "@/common/components/fe/fe-text-editor/FeTextEditor";
import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Comments(): JSX.Element {
  const methods = useForm({
    defaultValues: {
      comment: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <Box>
        <Typography variant="h2">Comments</Typography>
        <FeTextEditor name="comment" />
      </Box>
    </FormProvider>
  );
}
