import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <Box>
      <Typography variant="h1">Not Found</Typography>
      <Typography>Could not find requested resource</Typography>
      <Link component={NextLink} href="/">
        Return Home
      </Link>
    </Box>
  );
}
