import { TMaybe } from "@/common/types/general-types.type";
import { defaultFormatDate } from "@/common/utils/formatDate.utils";
import { getArticleFullPathBySlug } from "@/common/utils/getArticleFullPathBySlug";
import { getImageUrl } from "@/common/utils/getImageUrl";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  SxProps,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";

interface IImageData {
  url: string;
  alternativeText?: TMaybe<string>;
  size: number;
}

interface IUiPostPreviewProps {
  sx?: SxProps;
  title: TMaybe<string>;
  slug: TMaybe<string>;
  description?: TMaybe<string>;
  image: TMaybe<IImageData>;
  updatedAt?: TMaybe<string>;
}

export default function UiPostPreview({
  sx,
  title,
  slug,
  description,
  image,
  updatedAt,
}: IUiPostPreviewProps): JSX.Element {
  return (
    <Card sx={sx} elevation={10}>
      <CardHeader subheader={defaultFormatDate(updatedAt)} />
      <NextLink href={getArticleFullPathBySlug(slug)} passHref>
        <CardMedia
          component="img"
          height={200}
          image={getImageUrl(image?.url) || "/placeholder.webp"}
          alt={image?.alternativeText || "placeholder"}
        />
      </NextLink>
      <CardContent>
        {title && (
          <Typography
            variant="h3"
            sx={{
              "& a": {
                color: "inherit",
                textDecoration: "none",
                transition: "opacity 0.3s",
                ":hover": {
                  opacity: 0.8,
                },
              },
            }}
          >
            <NextLink href={getArticleFullPathBySlug(slug)} passHref>
              {title}
            </NextLink>
          </Typography>
        )}
        {description && <Typography>{description}</Typography>}
      </CardContent>
      <CardActions>
        <Button
          LinkComponent={NextLink}
          href={getArticleFullPathBySlug(slug)}
          variant="outlined"
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
