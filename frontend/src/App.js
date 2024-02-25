import React, { useState } from "react";
import './App.css';
import {
  Box, // Add to imports
  Container,
  Grid,
  IconButton, // Add to imports
  List, // Add to imports
  ListItem, // Add to imports
  ListItemText, // Add to imports
  Paper, // Add to imports
  Typography
} from "@mui/material";

import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

function App() {
  const ChatHeader = () => {
    return(
        <Typography variant="h4" align="center" gutterBottom>
            Voice Chatbot
        </Typography>
    )
  }
  const mockMessages = [
    {
      role: 'assistant',
      content: 'Hello, how can I help you today?',
      text: 'Hello, how can I help you today?'
    },
  ];
  
  const [messages, setMessages] = useState(mockMessages);
  
  const UserMessage = styled('div', { shouldForwardProp: (prop) => prop !== 'audio' })`
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  padding-right: ${({ theme, audio }) => (audio ? theme.spacing(6) : theme.spacing(2))};
  border-radius: 1rem;
  border-top-right-radius: 0;
  align-self: flex-end;
  max-width: 80%;
  word-wrap: break-word;
  `;

  return (
    <Container maxWidth="sm" sx={{ pt: 2 }}>
      <ChatHeader />
    </Container>
  );
}

export default App;
