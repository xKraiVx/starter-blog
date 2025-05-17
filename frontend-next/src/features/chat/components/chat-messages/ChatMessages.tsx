import { IMessage } from "@/features/chat/Chat";
import ChatMessage from "@/features/chat/components/chat-messages/ChatMessage";
import { Stack } from "@mui/material";
import { JSX, useEffect, useRef } from "react";

interface IChatMessagesProps {
  messages: IMessage[];
  username: string;
}

export default function ChatMessages({
  messages,
  username,
}: IChatMessagesProps): JSX.Element {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  console.log({ messages });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Stack
      sx={{
        flex: 1,
        p: 2,
        bgcolor: "background.default",
        borderRadius: 1,
        gap: 2,
        maxHeight: 270,
        height: "100%",
        overflowY: "auto",
      }}
    >
      {messages.map((message, i) => (
        <ChatMessage
          key={i}
          ref={messagesEndRef}
          message={message}
          username={username}
        />
      ))}
    </Stack>
  );
}
