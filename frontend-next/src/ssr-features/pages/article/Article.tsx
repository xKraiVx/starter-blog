import { ArticleForArticlePageFragment } from "@/ssr-features/pages/article/graphql/queries/getArticlePage.generated";
import { JSX } from "react";
import PageBuilder from "@/features/page-builder/page-builder";
import { TMaybe } from "@/common/types/general-types.type";
import { GetRecentArticlesQuery } from "@/ssr-features/graphql/queries/getRecentArticles.generated";
import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import Comments from "@/features/comments/Comments";

interface IArticleProps {
  data: TMaybe<ArticleForArticlePageFragment>;
  recentArticles?: GetRecentArticlesQuery;
}

export default function Article({
  data,
  recentArticles,
}: IArticleProps): JSX.Element {
  return (
    <>
      <PageBuilder widgets={data?.widgets} recentArticles={recentArticles} />
      <UiSectionContainer>
        <Comments />
      </UiSectionContainer>
    </>
  );
}
