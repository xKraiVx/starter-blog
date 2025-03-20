import { useAuthModal } from "@/features/auth-modal/hooks/useAuthModal";
import { LoginOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { JSX } from "react";

export default function LoginButton(): JSX.Element {
  const [show] = useAuthModal();

  return (
    <Button variant="outlined" onClick={show}>
      <LoginOutlined />
      Login
    </Button>
  );
}
