import FeTextEditor from "@/common/components/fe/FeTextEditor";
import { Box, Typography } from "@mui/material";
import { JSX } from "react";

export default function Comments(): JSX.Element {
  return (
    <Box>
      <Typography variant="h2">Comments</Typography>
      <FeTextEditor />
    </Box>
  );
}
