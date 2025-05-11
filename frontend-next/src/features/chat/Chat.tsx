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
  message: string;
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

  console.log({ id });

  useEffect(() => {
    // Initialize socket connection
    const ioInstance = io(BASE_URL);
    setSocket(ioInstance);

    // Handle "join" event
    ioInstance.emit("join", { username }, (error: unknown) => {
      if (error) alert(error);
    });

    // Listen for "welcome" event
    ioInstance.on("welcome", async (data) => {
      const welcomeMessage = {
        user: data.user,
        message: data.text,
      };

      setMessages((prev) => [welcomeMessage, ...prev]);

      // Fetch all messages from Strapi
      try {
        const res = await fetch(`${BASE_URL}/api/chat-messages`);
        const response = (await res.json()) as IMessages;
        const allMessages = response.data.map((one) => one.attributes);
        setMessages((prev) => [...prev, ...allMessages]);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    });

    // Listen for "message" event
    ioInstance.on("message", async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/chat-messages`);
        const response = (await res.json()) as IMessages;

        const allMessages = response.data.map((one) => one.attributes);
        setMessages(allMessages);
      } catch (err: unknown) {
        console.error("Error fetching new messages:", err);
      }
    });

    // Clean up on component unmount
    return () => {
      ioInstance.disconnect();
    };
  }, [username]);

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
