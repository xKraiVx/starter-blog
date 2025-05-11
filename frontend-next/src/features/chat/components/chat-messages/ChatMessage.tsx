import { IMessage } from "@/features/chat/Chat";
import { Box, Typography } from "@mui/material";
import { JSX } from "react";

interface IChatMessagesProps {
  message: IMessage;
  username: string;
}

export default function ChatMessage({
  message,
  username,
}: IChatMessagesProps): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "flex-start",
      }}
    >
      <Typography variant="body1" color="text.primary">
        {message.message}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {message.user === username ? "You" : message.user}
      </Typography>
    </Box>
  );
}
