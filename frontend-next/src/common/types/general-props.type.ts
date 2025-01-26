import { ELocale } from "@/common/enums/locale.enum";
import { ReactNode } from "react";

interface IPageParams {
  locale: ELocale;
}
interface IPostPageParams extends IPageParams {
  postSlug: string;
}

export interface IPageProps {
  params: IPageParams;
}

export interface IPostPageProps {
  params: IPostPageParams;
}

export interface ILayoutProps extends IPageProps {
  children: ReactNode;
}
