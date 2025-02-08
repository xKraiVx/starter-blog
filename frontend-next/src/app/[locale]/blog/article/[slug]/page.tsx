import { ELocale } from "@/common/enums/locale.enum";
import {
  IPageProps,
  IStaticParamsArguments,
} from "@/common/types/general-props.type";
import Article from "@/ssr-features/pages/article/Article";
import { getArticlePage } from "@/ssr-features/pages/article/fetchers/getArticlePage";
import { getArticlePageMeta } from "@/ssr-features/pages/article/fetchers/getArticlePageMeta";
import { getArticlesPagesSlugs } from "@/ssr-features/pages/article/fetchers/getArticlesPagesSlugs";
import { getMetaData } from "@/ssr-features/utils/getMetaData";
import { JSX } from "react";

export async function generateStaticParams({ params }: IStaticParamsArguments) {
  const { locale } = await params;

  const slugs = await getArticlesPagesSlugs(locale);

  return slugs.map((slug) => ({
    slug: slug,
    fallback: false,
  }));
}

interface IArticlePageParams {
  locale: ELocale;
  slug: string;
}

interface IArticleMetaDataProps {
  params: Promise<IArticlePageParams>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: IArticleMetaDataProps) {
  const { locale, slug } = await params;

  const data = await getArticlePageMeta(locale, slug);

  return getMetaData(data);
}

export default async function Page({
  params,
}: IPageProps<IArticlePageParams>): Promise<JSX.Element> {
  const { locale, slug } = await params;

  const data = await getArticlePage(locale, slug);

  return <Article data={data} />;
}
