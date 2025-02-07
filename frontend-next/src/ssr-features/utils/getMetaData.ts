import { SeoForPageFragment } from "@/ssr-features/graphql/fragments/seoForPage.generated";
import { Metadata } from "next";

export const getMetaData = (
  data: SeoForPageFragment | undefined | null
): Metadata => {
  return {
    title: data?.metaTitle || "Page",
    description: data?.metaDescription,
    robots: data?.metaRobots,
    twitter: {
      title: data?.metaTitle,
      description: data?.metaDescription,
      images: data?.metaImage?.url,
    },
    keywords: data?.keywords,
  };
};
