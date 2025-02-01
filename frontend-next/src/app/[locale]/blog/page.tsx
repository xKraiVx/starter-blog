import { IStaticParamsArguments } from "@/common/types/general-props.type";
import Blog from "@/ssr-features/pages/blog/Blog";
import { getBlogPage } from "@/ssr-features/pages/blog/fetchers/getBlogPage";
import { notFound } from "next/navigation";
import { JSX } from "react";

export default async function Page({
  params,
}: IStaticParamsArguments): Promise<JSX.Element> {
  const { locale } = await params;

  const data = await getBlogPage(locale);

  if (!data) {
    return notFound();
  }

  return <Blog data={data} />;
}
