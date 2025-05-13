import { IMessage } from "@/features/chat/Chat";
import ChatMessage from "@/features/chat/components/chat-messages/ChatMessage";
import { Box } from "@mui/material";
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
    <Box>
      {messages.map((message, i) => (
        <Box key={i} ref={messagesEndRef}>
          <ChatMessage message={message} username={username} />
        </Box>
      ))}
    </Box>
  );
}
