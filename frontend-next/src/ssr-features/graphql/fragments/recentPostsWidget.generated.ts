import * as Types from '../../../graphql/graphql-generated-types/types';

export type RecentPostsWidgetFragment = { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> };

export type ArticleForRecentPostsWidgetFragment = { __typename?: 'Article', title?: string | null, slug?: string | null };


export const ArticleForRecentPostsWidgetFragmentDoc = `
    fragment ArticleForRecentPostsWidget on Article {
  title
  slug
}
    `;
export const RecentPostsWidgetFragmentDoc = `
    fragment RecentPostsWidget on ComponentWidgetsRecentPosts {
  __typename
  title
  postCount
  id
  articles {
    ...ArticleForRecentPostsWidget
  }
}
    ${ArticleForRecentPostsWidgetFragmentDoc}`;