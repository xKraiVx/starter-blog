import Home from "@/ssr-features/pages/home/Home";
import { JSX } from "react";
import { IPageProps } from "@/common/types/general-props.type";
import { getHomePage } from "@/ssr-features/pages/home/fetchers/getHomePage";
import { getHomePageMeta } from "@/ssr-features/pages/home/fetchers/getHomePageMeta";
import { ELocale } from "@/common/enums/locale.enum";
import { getMetaData } from "@/ssr-features/utils/getMetaData";

interface IHomeMetaDataProps {
  params: Promise<{ locale: ELocale }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: IHomeMetaDataProps) {
  const { locale } = await params;

  const data = await getHomePageMeta(locale);

  return getMetaData(data);
}

export default async function Page({
  params,
}: IPageProps): Promise<JSX.Element> {
  const { locale } = await params;

  const data = await getHomePage(locale);

  return <Home data={data} />;
}
