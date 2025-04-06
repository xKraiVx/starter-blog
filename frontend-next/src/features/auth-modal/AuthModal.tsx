"use client";

import { JSX, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  SxProps,
} from "@mui/material";
import LoginForm from "@/features/auth-modal/components/login-form/LoginForm";
import { TAuthModalMode } from "@/features/auth-modal/types/authModalMode";
import RegisterForm from "@/features/auth-modal/components/register-form/RegisterForm";
import { useLogin } from "@/features/auth-modal/hooks/useLogin";

interface IAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: TAuthModalMode;
}

const activeModeSx: SxProps = {
  color: "primary.main",
  borderColor: "primary.main",
  pointerEvents: "none",
};

export default function AuthModal({
  isOpen,
  onClose,
  defaultMode = "signIn",
}: IAuthModalProps): JSX.Element {
  const [mode, setMode] = useState<TAuthModalMode>(defaultMode);
  const { login, isLoading: isLoginLoading } = useLogin(onClose);

  const title = mode === "signIn" ? "Sign In" : "Sign Up";

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Button
          variant="outlined"
          sx={mode === "signIn" ? activeModeSx : {}}
          onClick={() => setMode("signIn")}
        >
          Sign In
        </Button>
        <Button
          sx={mode === "signUp" ? activeModeSx : {}}
          variant="outlined"
          onClick={() => setMode("signUp")}
        >
          Sign Up
        </Button>
      </Box>
      <DialogContent>
        {mode === "signUp" ? (
          <RegisterForm onClose={onClose} />
        ) : (
          <LoginForm
            onSubmit={login}
            isLoading={isLoginLoading}
            onClose={onClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
