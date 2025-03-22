import * as Types from "../../../graphql/graphql-generated-types/types";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useFetcher } from "@/graphql/useFetcher";
export type GetMeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetMeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "UsersPermissionsMe";
    email?: string | null;
    id: string;
    role?: {
      __typename?: "UsersPermissionsMeRole";
      name: string;
      type?: string | null;
    } | null;
  } | null;
};

export type UserForMeFragment = {
  __typename?: "UsersPermissionsMe";
  email?: string | null;
  id: string;
  role?: {
    __typename?: "UsersPermissionsMeRole";
    name: string;
    type?: string | null;
  } | null;
};

export type RoleForMeFragment = {
  __typename?: "UsersPermissionsMeRole";
  name: string;
  type?: string | null;
};

export const RoleForMeFragmentDoc = `
    fragment RoleForMe on UsersPermissionsMeRole {
  name
  type
}
    `;
export const UserForMeFragmentDoc = `
    fragment UserForMe on UsersPermissionsMe {
  email
  id
  role {
    ...RoleForMe
  }
}
    ${RoleForMeFragmentDoc}`;
export const GetMeDocument = `
    query getMe {
  me {
    ...UserForMe
  }
}
    ${UserForMeFragmentDoc}`;

export const useGetMeQuery = <TData = GetMeQuery, TError = unknown>(
  variables?: GetMeQueryVariables,
  options?: Omit<UseQueryOptions<GetMeQuery, TError, TData>, "queryKey"> & {
    queryKey?: UseQueryOptions<GetMeQuery, TError, TData>["queryKey"];
  }
) => {
  return useQuery<GetMeQuery, TError, TData>({
    queryKey: variables === undefined ? ["getMe"] : ["getMe", variables],
    queryFn: useFetcher<GetMeQuery, GetMeQueryVariables>(GetMeDocument).bind(
      null,
      variables
    ),
    ...options,
  });
};
