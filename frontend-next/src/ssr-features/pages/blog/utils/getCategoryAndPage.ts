type TGetCategoryAndPage = (slugs: string[] | undefined) => {
  categorySlug?: string;
  pageNumber: number;
};

export const getCategoryAndPage: TGetCategoryAndPage = (slugs) => {
  if (!slugs) {
    return {
      pageNumber: 1,
    };
  }

  const [slug, pageNumber] = slugs;

  if (Number(slug)) {
    return {
      pageNumber: Number(slug),
    };
  }

  return {
    categorySlug: slug,
    pageNumber: pageNumber ? Number(pageNumber) : 1,
  };
};
