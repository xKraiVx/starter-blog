import PageBuilder from "@/features/page-builder/page-builder";
import { GetHomePageQuery } from "@/ssr-features/pages/home/graphql/queries/getHomePage.generated";
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

  return <PageBuilder widgets={homePage?.widgets} />;
}
