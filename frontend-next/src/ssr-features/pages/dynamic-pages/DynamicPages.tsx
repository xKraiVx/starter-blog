import UiPageContainer from "@/common/components/ui/ui-page-container/UiPageContainer";
import UiPageTitle from "@/common/components/ui/ui-page-title/UiPageTitle";
import { DynamicPageDataFragment } from "@/ssr-features/pages/dynamic-pages/graphql/queries/getDynamicPage.generated";
import { notFound } from "next/navigation";
import { JSX } from "react";

interface IDynamicPagesProps {
  data: DynamicPageDataFragment | null;
}

export default function DynamicPages({
  data,
}: IDynamicPagesProps): JSX.Element {
  if (!data) {
    notFound();
  }

  return (
    <UiPageContainer>
      <UiPageTitle>{data.title}</UiPageTitle>
    </UiPageContainer>
  );
}
