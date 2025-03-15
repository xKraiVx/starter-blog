"use client";

import { JSX } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import LoginForm from "@/features/login-modal/components/login-form/LoginForm";

interface ILoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
}: ILoginModalProps): JSX.Element {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Sign In</DialogTitle>
      <DialogContent>
        <LoginForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
