"use client";

import { Pagination, PaginationItem, PaginationProps } from "@mui/material";
import NextLink from "next/link";

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
  ...props
}: IUiPaginationProps) {
  return (
    <Pagination
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          component={NextLink}
          href={getHref(item.page, additionalSlug)}
          shallow
          {...item}
        />
      )}
      {...props}
    />
  );
}
