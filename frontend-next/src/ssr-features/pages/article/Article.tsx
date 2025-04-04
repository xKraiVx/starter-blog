import UiPageContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import UiPageTitle from "@/common/components/ui/ui-page-title/UiPageTitle";
import { ArticleForArticlePageFragment } from "@/ssr-features/pages/article/graphql/queries/getArticlePage.generated";
import { JSX } from "react";

interface IArticleProps {
  data: ArticleForArticlePageFragment | null;
}

export default function Article({ data }: IArticleProps): JSX.Element {
  return (
    <UiPageContainer>
      <UiPageTitle>{data?.title}</UiPageTitle>
    </UiPageContainer>
  );
}
