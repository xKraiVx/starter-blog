import * as Types from '../../../graphql/graphql-generated-types/types';

export type TextEditorWidgetFragment = { __typename: 'ComponentWidgetsTextEditor', id: string, title?: string | null, editor?: any | null };


export const TextEditorWidgetFragmentDoc = `
    fragment TextEditorWidget on ComponentWidgetsTextEditor {
  __typename
  id
  title
  editor
}
    `;