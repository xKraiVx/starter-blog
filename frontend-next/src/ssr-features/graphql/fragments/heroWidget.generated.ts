import * as Types from '../../../graphql/graphql-generated-types/types';

export type HeroWidgetFragment = { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };


export const HeroWidgetFragmentDoc = `
    fragment HeroWidget on ComponentWidgetsHero {
  __typename
  id
  title
  description
  backgroundImage {
    size
    url
    alternativeText
  }
}
    `;