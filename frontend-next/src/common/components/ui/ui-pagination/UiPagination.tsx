"use client";

import { getBlogHref } from "@/ssr-features/pages/blog/utils/getBlogHref";
import { Pagination, PaginationItem, PaginationProps } from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";

interface IUiPaginationProps extends PaginationProps {
  additionalSlug?: string;
}

export default function UiPagination({
  additionalSlug,
  count,
  ...props
}: IUiPaginationProps): JSX.Element | null {
  if (!count || count === 1) {
    return null;
  }

  return (
    <Pagination
      color="primary"
      count={count}
      {...props}
      sx={{
        ".Mui-selected": {
          pointerEvents: "none",
        },
      }}
      renderItem={(item) => (
        <PaginationItem
          component={NextLink}
          href={getBlogHref(item.page, additionalSlug)}
          shallow
          {...item}
        />
      )}
    />
  );
}
