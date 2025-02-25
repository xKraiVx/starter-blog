import { TMaybe } from "@/common/types/general-types.type";

export const getArticleFullPathBySlug = (slug: TMaybe<string>): string => {
  if (!slug) {
    return "#";
  }

  return `blog/article/${slug}`;
};
