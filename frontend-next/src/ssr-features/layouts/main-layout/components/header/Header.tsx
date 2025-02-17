import Navigation from "@/ssr-features/layouts/main-layout/components/navigation/Navigation";
import { Container } from "@mui/material";

export default function Header() {
  return (
    <Container sx={{ py: 4 }}>
      <Navigation />
    </Container>
  );
}
