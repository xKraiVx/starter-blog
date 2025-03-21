import * as Types from '../../../../graphql/graphql-generated-types/types';

export type MeFragment = { __typename?: 'UsersPermissionsMe', id: string, documentId: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', name: string, type?: string | null, description?: string | null } | null };


export const MeFragmentDoc = `
    fragment Me on UsersPermissionsMe {
  id
  documentId
  username
  email
  confirmed
  blocked
  role {
    name
    type
    description
  }
}
    `;