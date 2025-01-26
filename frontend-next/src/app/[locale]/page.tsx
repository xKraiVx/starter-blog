import {
  GetHomePageDocument,
  GetHomePageQuery,
  GetHomePageQueryVariables,
} from "@/ssr-features/home/graphql/queries/getHomePage.generated";
import Home from "@/ssr-features/home/Home";
import { JSX } from "react";
import fetcher from "@/graphql/fetcher";
import { IPageProps } from "@/common/types/general-props.type";

export default async function Page({
  params,
}: IPageProps): Promise<JSX.Element> {
  const data = await fetcher<GetHomePageQuery, GetHomePageQueryVariables>(
    GetHomePageDocument,
    { locale: params.locale }
  )();

  return <Home data={data} />;
}
