import { useLoginModal } from "@/features/login-modal/hooks/useLoginModal";
import { LoginOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { JSX } from "react";

export default function LoginButton(): JSX.Element {
  const [show] = useLoginModal();

  return (
    <Button variant="outlined" onClick={show}>
      <LoginOutlined />
      Login
    </Button>
  );
}
