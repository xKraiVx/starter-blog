import { ELocale } from "@/common/enums/locale.enum";
import { IPageProps } from "@/common/types/general-props.type";
import About from "@/ssr-features/pages/about/About";
import { getAboutPage } from "@/ssr-features/pages/about/fetchers/getAboutPage";
import { getAboutPageMeta } from "@/ssr-features/pages/about/fetchers/getAboutPageMeta";
import { getMetaData } from "@/ssr-features/utils/getMetaData";
import { JSX } from "react";

interface IAboutMetaDataProps {
  params: Promise<{ locale: ELocale }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: IAboutMetaDataProps) {
  const { locale } = await params;

  const data = await getAboutPageMeta(locale);

  return getMetaData(data);
}

export default async function Page({
  params,
}: IPageProps): Promise<JSX.Element> {
  const { locale } = await params;

  const { data, recentArticles } = await getAboutPage(locale);

  return <About data={data} recentArticles={recentArticles} />;
}
