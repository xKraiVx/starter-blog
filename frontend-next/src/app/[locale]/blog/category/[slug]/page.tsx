import { ELocale } from "@/common/enums/locale.enum";
import {
  IPageProps,
  IStaticParamsArguments,
} from "@/common/types/general-props.type";
import Blog from "@/ssr-features/pages/blog/Blog";
import { getBlogPage } from "@/ssr-features/pages/blog/fetchers/getBlogPage";
import { getCategoriesPagesSlugs } from "@/ssr-features/pages/blog/fetchers/getCategoriesPagesSlugs";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { JSX } from "react";

export async function generateStaticParams({ params }: IStaticParamsArguments) {
  const { locale } = await params;

  const slugs = await getCategoriesPagesSlugs(locale);

  return slugs.map((slug) => ({
    slug: slug,
    fallback: false,
  }));
}

interface ICategoriesPageParams {
  locale: ELocale;
  slug: string;
}

export default async function Page({
  params,
}: IPageProps<ICategoriesPageParams>): Promise<JSX.Element> {
  const { locale, slug } = await params;

  const data = await getBlogPage(locale, {
    filter: {
      categories: {
        slug: {
          eq: slug,
        },
      },
    },
  });

  if (!data) {
    return notFound();
  }

  return <Box>{slug}</Box>;
}
