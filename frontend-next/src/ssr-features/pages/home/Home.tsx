import UiPageContainer from "@/common/components/ui/ui-page-container/UiPageContainer";
import UiPageTitle from "@/common/components/ui/ui-page-title/UiPageTitle";
import { GetHomePageQuery } from "@/ssr-features/pages/home/graphql/queries/getHomePage.generated";
import { Typography } from "@mui/material";
import { notFound } from "next/navigation";
import { JSX } from "react";

interface IHomeProps {
  data: GetHomePageQuery;
}

export default function Home({ data }: IHomeProps): JSX.Element {
  if (!data) {
    notFound();
  }

  const { homePage } = data;

  return (
    <UiPageContainer>
      <UiPageTitle>{homePage?.title}</UiPageTitle>
      <Typography variant="h2">Hello, World!</Typography>
      <Typography variant="h3">Hello, World!</Typography>
    </UiPageContainer>
  );
}
