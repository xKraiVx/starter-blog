"use client";

import ChatMessages from "@/features/chat/components/chat-messages/ChatMessages";
import { Box, Button, TextField, Typography } from "@mui/material";
import { JSX, SetStateAction, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;

interface IChatProps {
  username: string;
  id: string;
}

export interface IMessage {
  user: string;
  message?: string;
}

export interface IMessages {
  data: {
    attributes: IMessage;
  }[];
}

export default function Chat({ username, id }: IChatProps): JSX.Element {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState<string>("");
  const [users] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null); // Store socket instance

  useEffect(() => {
    const ioInstance = io(BASE_URL);
    setSocket(ioInstance);

    ioInstance.emit("join", { username }, (error: unknown) => {
      if (error) alert(error);
    });

    ioInstance.on("welcome", async (data) => {
      const welcomeMessage = {
        user: data.user,
        message: data.text,
      };

      setMessages((prev) => [welcomeMessage, ...prev]);
    });

    ioInstance.on("message", async ({ data }) => {
      console.log("response", data);

      setMessages((prev) => [data, ...prev]);
    });

    return () => {
      ioInstance.disconnect();
    };
  }, [id, username]);

  const sendMessage = () => {
    if (!message.trim()) {
      alert("Message can't be empty");
      return;
    }

    if (socket) {
      socket.emit(
        "sendMessage",
        { message, user: username },
        (error: unknown) => {
          if (error) alert(error);
        }
      );
      setMessage("");
    }
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    sendMessage();
  };
  return (
    <Box>
      <Typography variant="h4">Chat</Typography>
      {users.map((user, i) => (
        <Typography key={i} variant="body1">
          {user}
        </Typography>
      ))}
      <ChatMessages messages={messages} username={username} />
      <TextField
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={handleChange}
      />
      <Button onClick={handleClick}>Send</Button>
    </Box>
  );
}
