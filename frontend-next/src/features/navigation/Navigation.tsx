import { Container, Link } from "@mui/material";
import NextLink from "next/link";

export default function Navigation() {
  return (
    <Container
      sx={{
        display: "flex",
        gap: 2,
        py: 2,
      }}
    >
      <Link component={NextLink} href="/">
        Home
      </Link>
      <Link component={NextLink} href="/about">
        About
      </Link>
      <Link component={NextLink} href="/contact-us">
        Contact Us
      </Link>
      <Link component={NextLink} href="/blog">
        Blog
      </Link>
    </Container>
  );
}
