import * as Types from '../../../graphql/graphql-generated-types/types';

export type TextWithImageWidgetFragment = { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };


export const TextWithImageWidgetFragmentDoc = `
    fragment TextWithImageWidget on ComponentWidgetsTextWithImage {
  __typename
  id
  image {
    size
    url
    alternativeText
  }
  isImageOnLeftSide
  text
  title
}
    `;