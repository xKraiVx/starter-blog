"use client";

import { JSX, useState } from "react";
import { signIn } from "next-auth/react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useLogin } from "@/features/login-modal/hooks/useLogin";

interface ILoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
}: ILoginModalProps): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login({ input: { identifier: email, password } });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Sign In</DialogTitle>
      <DialogContent>
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="dense"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="dense"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}
