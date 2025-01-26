export type SeoForPageFragment = {
  __typename?: "ComponentSharedSeo";
  canonicalURL?: string | null;
  id: string;
  keywords?: string | null;
  metaDescription: string;
  metaRobots?: string | null;
  metaTitle: string;
  metaViewport?: string | null;
  metaImage?: {
    __typename?: "UploadFile";
    url: string;
    width?: number | null;
    height?: number | null;
    alternativeText?: string | null;
  } | null;
};

export const SeoForPageFragmentDoc = `
    fragment SeoForPage on ComponentSharedSeo {
  canonicalURL
  id
  keywords
  metaDescription
  metaImage {
    url
    width
    height
    alternativeText
  }
  metaRobots
  metaTitle
  metaViewport
}
    `;
