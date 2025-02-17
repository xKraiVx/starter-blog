"use client";

import { Pagination, PaginationItem, PaginationProps } from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";

interface IUiPaginationProps extends PaginationProps {
  additionalSlug?: string;
}

const getHref = (pageNumber: number | null, additionalSlug?: string) => {
  const slug = additionalSlug ? `/${additionalSlug}` : "";

  console.log({ slug });

  return `/blog${slug}/${pageNumber}`;
};

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
      {...props}
      sx={{
        ".Mui-selected": {
          pointerEvents: "none",
        },
      }}
      renderItem={(item) => (
        <PaginationItem
          component={NextLink}
          href={getHref(item.page, additionalSlug)}
          shallow
          {...item}
        />
      )}
    />
  );
}
