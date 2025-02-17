import NavigationItem from "@/features/navigation/components/NavigationItem";
import { NAVIGATION_LIST } from "@/features/navigation/constants/navigationList";
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
      {NAVIGATION_LIST.map((item) => (
        <NavigationItem key={item.href} component={NextLink} href={item.href}>
          {item.label}
        </NavigationItem>
      ))}
    </Container>
  );
}
