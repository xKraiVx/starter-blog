import { ELocale } from "@/common/enums/locale.enum";
import { ReactNode } from "react";

interface IParams {
  locale: ELocale;
}
interface IPostPageParams extends IParams {
  postSlug: string;
}

export interface IPageProps<T = IParams> {
  params: Promise<T>;
}

export interface IStaticParamsArguments {
  params: Promise<IParams>;
}

export interface IPostPageProps {
  params: IPostPageParams;
}

export interface ILayoutProps extends IPageProps {
  children: ReactNode;
}
