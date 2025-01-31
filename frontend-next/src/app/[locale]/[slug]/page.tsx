import { ELocale } from "@/common/enums/locale.enum";
import {
  IPageProps,
  IStaticParamsArguments,
} from "@/common/types/general-props.type";
import fetcher from "@/graphql/fetcher";
import DynamicPages from "@/ssr-features/dynamic-pages/DynamicPages";
import {
  DynamicPagesSlugsDocument,
  DynamicPagesSlugsQuery,
  DynamicPagesSlugsQueryVariables,
} from "@/ssr-features/dynamic-pages/graphql/queries/getDymanicPagesSlugs.generated";
import {
  GetDynamicPageDocument,
  GetDynamicPageQuery,
  GetDynamicPageQueryVariables,
} from "@/ssr-features/dynamic-pages/graphql/queries/getDynamicPage.generated";
import { JSX } from "react";

export async function generateStaticParams({ params }: IStaticParamsArguments) {
  const { locale } = await params;

  const data = await fetcher<
    DynamicPagesSlugsQuery,
    DynamicPagesSlugsQueryVariables
  >(DynamicPagesSlugsDocument, { locale })();

  return data.pages.map((page) => ({
    slug: page?.slug,
    fallback: false,
  }));
}

interface IDynamicPageParams {
  locale: ELocale;
  slug: string;
}

export default async function Page({
  params,
}: IPageProps<IDynamicPageParams>): Promise<JSX.Element> {
  const { locale, slug } = await params;

  console.log({ params });

  const { pages } = await fetcher<
    GetDynamicPageQuery,
    GetDynamicPageQueryVariables
  >(GetDynamicPageDocument, { filters: { slug: { eq: slug } }, locale })();

  const data = pages[0];

  return <DynamicPages data={data} />;
}
