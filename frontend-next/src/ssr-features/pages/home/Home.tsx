import PageBuilder from "@/features/page-builder/page-builder";
import { GetRecentArticlesQuery } from "@/ssr-features/graphql/queries/getRecentArticles.generated";
import { GetHomePageQuery } from "@/ssr-features/pages/home/graphql/queries/getHomePage.generated";
import { notFound } from "next/navigation";
import { JSX } from "react";

interface IHomeProps {
  data: GetHomePageQuery;
  recentArticles?: GetRecentArticlesQuery;
}

export default function Home({
  data,
  recentArticles,
}: IHomeProps): JSX.Element {
  if (!data) {
    notFound();
  }

  const { homePage } = data;

  return (
    <PageBuilder widgets={homePage?.widgets} recentArticles={recentArticles} />
  );
}
