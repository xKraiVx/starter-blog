import { GetHomePageQuery } from "@/ssr-features/home/graphql/queries/getHomePage.generated";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JSX } from "react";

interface IHomeProps {
  data: GetHomePageQuery;
}

function Home({ data }: IHomeProps): JSX.Element {
  if (!data) {
    notFound();
  }

  const { homePage } = data;

  console.log(homePage);

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
        {homePage?.title}
      </Typography>
      <Typography variant="h2">Hello, World!</Typography>
      <Typography variant="h3">Hello, World!</Typography>
    </Box>
  );
}

export default Home;
