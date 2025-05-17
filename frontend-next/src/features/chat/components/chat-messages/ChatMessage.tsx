import { IMessage } from "@/features/chat/Chat";
import { Stack, Typography } from "@mui/material";
import { forwardRef, JSX } from "react";

interface IChatMessagesProps {
  message: IMessage;
  username: string;
}

const ChatMessage = forwardRef<HTMLDivElement, IChatMessagesProps>(
  ({ message, username }, ref): JSX.Element => {
    const isYou = message?.user === username;

    return (
      <Stack
        ref={ref}
        sx={{
          gap: 1,
          alignItems: isYou ? "flex-end" : "flex-start",
          bgcolor: "background.paper",
          borderRadius: 1,
          p: 1,
          ml: isYou ? 2 : 0,
          mr: isYou ? 0 : 2,
        }}
      >
        <Typography variant="body1" color="text.primary">
          {message?.message}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            color: isYou ? "secondary.main" : "text.secondary",
          }}
        >
          {isYou ? "You" : message?.user}
        </Typography>
      </Stack>
    );
  }
);

ChatMessage.displayName = "ChatMessage";

export default ChatMessage;
