import * as Types from '../../../graphql/graphql-generated-types/types';

export type CallToActionWidgetFragment = { __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };


export const CallToActionWidgetFragmentDoc = `
    fragment CallToActionWidget on ComponentWidgetsCallToAction {
  __typename
  buttonText
  description
  id
  title
  backgroundImage {
    size
    url
    alternativeText
  }
}
    `;