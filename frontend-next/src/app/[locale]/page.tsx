import {
  GetHomePageDocument,
  GetHomePageQuery,
  GetHomePageQueryVariables,
} from "@/ssr-features/pages/home/graphql/queries/getHomePage.generated";
import Home from "@/ssr-features/pages/home/Home";
import { JSX } from "react";
import fetcher from "@/graphql/fetcher";
import { IPageProps } from "@/common/types/general-props.type";

export default async function Page({
  params,
}: IPageProps): Promise<JSX.Element> {
  const { locale } = await params;
  const data = await fetcher<GetHomePageQuery, GetHomePageQueryVariables>(
    GetHomePageDocument,
    { locale }
  )();

  return <Home data={data} />;
}
