"use client";

import { useGetMe } from "@/common/hooks/useGetMe";
import Chat from "@/features/chat/Chat";
import { Message } from "@mui/icons-material";
import { IconButton, Popover } from "@mui/material";
import { JSX, MouseEvent, useState } from "react";

export default function ChatMenu(): JSX.Element | null {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { data: me } = useGetMe();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  if (!me || !me.email) {
    return null;
  }

  return (
    <>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        color="primary"
        sx={{
          position: "fixed",
          bottom: 40,
          left: 40,
          zIndex: 1000,
        }}
      >
        <Message />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Chat id={me.id} username={me.email} />
      </Popover>
    </>
  );
}
