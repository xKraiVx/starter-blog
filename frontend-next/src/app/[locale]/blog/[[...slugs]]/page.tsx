import { ELocale } from "@/common/enums/locale.enum";
import {
  IPageProps,
  IStaticParamsArguments,
} from "@/common/types/general-props.type";
import Blog from "@/ssr-features/pages/blog/Blog";
import { getBlogPage } from "@/ssr-features/pages/blog/fetchers/getBlogPage";
import { getBlogPageMeta } from "@/ssr-features/pages/blog/fetchers/getBlogPageMeta";
import { getCategoriesPagesSlugs } from "@/ssr-features/pages/blog/fetchers/getCategoriesPagesSlugs";
import { getCategoryAndPage } from "@/ssr-features/pages/blog/utils/getCategoryAndPage";
import { getMetaData } from "@/ssr-features/utils/getMetaData";
import { notFound } from "next/navigation";
import { JSX } from "react";

export async function generateStaticParams({ params }: IStaticParamsArguments) {
  const { locale } = await params;

  const slugs = await getCategoriesPagesSlugs(locale);

  return slugs.map((slug) => ({
    slugs: [slug],
    fallback: true,
  }));
}

interface IBlogPageParams {
  locale: ELocale;
  slugs: string[] | undefined;
}

interface IBlogMetaDataProps {
  params: Promise<IBlogPageParams>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: IBlogMetaDataProps) {
  const { locale } = await params;

  const data = await getBlogPageMeta(locale);

  return getMetaData(data);
}

export default async function Page({
  params,
}: IPageProps<IBlogPageParams>): Promise<JSX.Element> {
  const { locale, slugs } = await params;

  const { pageNumber, categorySlug } = getCategoryAndPage(slugs);

  const data = await getBlogPage({
    locale,
    slugs,
  });

  console.log(data);

  if (!data) {
    return notFound();
  }

  return (
    <Blog data={data} pageNumber={pageNumber} categorySlug={categorySlug} />
  );
}
