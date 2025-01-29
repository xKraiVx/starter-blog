import { DynamicPageDataFragment } from "@/ssr-features/dynamic-pages/graphql/queries/getDynamicPage.generated";
import { Typography } from "@mui/material";
import { notFound } from "next/navigation";
import { JSX } from "react";

interface IDynamicPagesProps {
  data: DynamicPageDataFragment | null;
}

export default function DynamicPages({
  data,
}: IDynamicPagesProps): JSX.Element {
  if (!data) {
    notFound();
  }

  return <Typography>{data.title}</Typography>;
}
