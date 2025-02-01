import { ELocale } from "@/common/enums/locale.enum";
import {
  IPageProps,
  IStaticParamsArguments,
} from "@/common/types/general-props.type";
import { getDynamicPage } from "@/ssr-features/pages/dynamic-pages/fetchers/getDynamicPage";
import { getDynamicPagesSlugs } from "@/ssr-features/pages/dynamic-pages/fetchers/getDynamicPagesSlugs";
import DynamicPages from "@/ssr-features/pages/dynamic-pages/DynamicPages";

import { JSX } from "react";

export async function generateStaticParams({ params }: IStaticParamsArguments) {
  const { locale } = await params;

  const slugs = await getDynamicPagesSlugs(locale);

  return slugs.map((slug) => ({
    slug: slug,
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

  const data = await getDynamicPage(locale, slug);

  return <DynamicPages data={data} />;
}
