import { getImageUrl } from "@/common/utils/getImageUrl";
import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { ImgHTMLAttributes, JSX } from "react";

interface IImageData {
  size: number;
  url: string;
  alternativeText?: string | null;
}

interface IImageProps {
  data: IImageData | null | undefined;
  sx?: SxProps;
  imageProps?: ImgHTMLAttributes<HTMLImageElement>;
}

export default function UiImage({
  data,
  sx,
  imageProps,
}: IImageProps): JSX.Element | null {
  if (!data) {
    return null;
  }

  const { url, alternativeText } = data;

  const imageUrl = getImageUrl(url);

  if (!imageUrl) {
    return null;
  }

  return (
    <Box sx={{ position: "relative", ...sx }}>
      <Image
        style={{ objectFit: "contain" }}
        src={imageUrl}
        alt={alternativeText || "Image"}
        fill={true}
      />
    </Box>
  );
}
