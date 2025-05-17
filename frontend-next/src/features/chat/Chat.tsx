"use client";

import FeTextField from "@/common/components/fe/FeTextField";
import ChatMessages from "@/features/chat/components/chat-messages/ChatMessages";
import { Box, Button, Stack, Typography } from "@mui/material";
import { JSX, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
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

export interface IFormValues {
  message: string;
}

const DEFAULT_VALUE = {
  message: "",
};

export default function Chat({ username, id }: IChatProps): JSX.Element {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [users] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null); // Store socket instance
  const methods = useForm<IFormValues>({
    defaultValues: DEFAULT_VALUE,
  });

  const { reset } = methods;

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

      setMessages((prev) => [...prev, data]);
    });

    return () => {
      ioInstance.disconnect();
    };
  }, [id, username]);

  const sendMessage = (message: string) => {
    if (!message) {
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
    }

    reset(DEFAULT_VALUE);
  };

  const submit = (data: IFormValues) => {
    sendMessage(data.message);
  };

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 1,
      }}
    >
      <Typography variant="h4">Chat</Typography>
      {users.map((user, i) => (
        <Typography key={i} variant="body1">
          {user}
        </Typography>
      ))}
      <ChatMessages messages={messages} username={username} />
      <FormProvider {...methods}>
        <Stack
          component="form"
          onSubmit={methods.handleSubmit(submit)}
          sx={{
            gap: 1,
          }}
        >
          <FeTextField
            label="message"
            placeholder="Type your message"
            name="message"
          />
          <Button variant="contained" type="submit">
            Send
          </Button>
        </Stack>
      </FormProvider>
    </Box>
  );
}
