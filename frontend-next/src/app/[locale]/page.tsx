import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Typography variant="h1" color="primary">
        Hello, World!
      </Typography>
      <Typography variant="h2">Hello, World!</Typography>
      <Typography variant="h3">Hello, World!</Typography>
    </Box>
  );
}
