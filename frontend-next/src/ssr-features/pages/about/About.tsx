import PageBuilder from "@/features/page-builder/page-builder";
import { GetRecentArticlesQuery } from "@/ssr-features/graphql/queries/getRecentArticles.generated";
import { GetAboutPageQuery } from "@/ssr-features/pages/about/graphql/queries/getAboutPage.generated";
import { notFound } from "next/navigation";
import { JSX } from "react";

interface IAboutProps {
  data: GetAboutPageQuery;
  recentArticles?: GetRecentArticlesQuery;
}

export default function About({
  data,
  recentArticles,
}: IAboutProps): JSX.Element {
  if (!data) {
    notFound();
  }

  const { about } = data;

  return (
    <PageBuilder widgets={about?.widgets} recentArticles={recentArticles} />
  );
}
