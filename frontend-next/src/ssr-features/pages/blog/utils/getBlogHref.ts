export const getBlogHref = (
  pageNumber: number | null,
  additionalSlug?: string
) => {
  const slug = additionalSlug ? `/${additionalSlug}` : "";

  return `/blog${slug}/${pageNumber}`;
};
