import { NextLogoIcon } from "@/common/components/icons/NextLogoIcon";
import { Link } from "@mui/material";
import NextLink from "next/link";

export default function Logo() {
  return (
    <Link
      component={NextLink}
      aria-label="Home"
      sx={{
        transition: "opacity 0.3s",
        height: { xs: 30, md: 40 },
        "&:hover": { opacity: 0.7 },
      }}
      href="/"
    >
      <NextLogoIcon
        sx={{
          width: "auto",
          height: "100%",
        }}
      />
    </Link>
  );
}
