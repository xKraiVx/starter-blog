import { ArticleForArticlePageFragment } from "@/ssr-features/pages/article/graphql/queries/getArticlePage.generated";
import { JSX } from "react";
import PageBuilder from "@/features/page-builder/page-builder";

interface IArticleProps {
  data: ArticleForArticlePageFragment | null;
}

export default function Article({ data }: IArticleProps): JSX.Element {
  console.log("Article data", data);

  return <PageBuilder widgets={data?.widgets} />;
}
