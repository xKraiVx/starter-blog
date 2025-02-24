import { TMayby } from "@/common/types/general-types.type";
import { Card, Typography } from "@mui/material";
import Link from "next/link";
import { JSX } from "react";

interface IUiPostPreviewProps {
  title: TMayby<string>;
  slug: TMayby<string>;
}

export default function UiPostPreview({
  title,
  slug,
}: IUiPostPreviewProps): JSX.Element {
  return (
    <Link href={slug || ""}>
      <Card>{title && <Typography variant="h3">{title}</Typography>}</Card>
    </Link>
  );
}
