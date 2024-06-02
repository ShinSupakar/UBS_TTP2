import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, Paper, Divider, Avatar, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

const ForumPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'John Doe', text: 'Welcome to the community forum!' },
    { id: 2, user: 'Jane Smith', text: 'Hello everyone!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        user: 'Current User', // Replace with the current user's name from auth context
        text: newMessage,
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const handleLikeMessage = (id) => {
    setMessages(messages.map(msg => msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      {/* Taskbar */}
      <Box 
        sx={{ 
          width: '100%', 
          padding: '8px 16px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          position: 'fixed',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>The Diversity Forum</Typography>
        <Box>
          <Link to="/newscreen" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white', marginRight: '16px', textTransform: 'none'}}>Home</Button>
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white', marginRight: '16px' , textTransform: 'none'}}>Profile</Button>
          </Link>
          <Link to="/inclusive-resources" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white', marginRight: '16px', textTransform: 'none' }}>Initiatives</Button>          
          </Link>
          <Button sx={{ color: 'white', marginRight: '16px' , textTransform: 'none'}}>Get Involved</Button>
          <Button sx={{ color: 'white', marginRight: '16px', textTransform: 'none' }}>Settings</Button>
        </Box>
      </Box>

      <Paper sx={{ padding: '32px', marginTop: '80px', maxWidth: '800px', width: '100%' }}>
        <Typography variant="h4" sx={{ color: '#e60000', fontWeight: 'bold', marginBottom: '16px' }}>Community Forum</Typography>

        <Divider sx={{ marginBottom: '16px' }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <List sx={{ width: '100%', maxHeight: '300px', overflowY: 'auto' }}>
            {messages.map((message, index) => (
              <ListItem key={message.id} alignItems="flex-start">
                <Avatar sx={{ marginRight: '16px' }}>{message.user.charAt(0)}</Avatar>
                <ListItemText
                  primary={message.user}
                  secondary={
                    <Box>
                      <Typography component="span">{message.text}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                        <Tooltip title="Like">
                          {/* <IconButton onClick={() => handleLikeMessage(message.id)} size="small">
                            <ThumbUpIcon fontSize="small" />
                          </IconButton> */}
                        </Tooltip>
                        <Typography variant="body2" sx={{ marginLeft: '4px' }}>{message.likes}</Typography>
                        <Tooltip title="Reply">
                          {/* <IconButton size="small">
                            <ReplyIcon fontSize="small" />
                          </IconButton> */}
                        </Tooltip>
                      </Box>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>

          <Box sx={{ display: 'flex', width: '100%', marginTop: '16px' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              sx={{ marginRight: '8px' }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#e60000',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#cc0000',
                },
              }}
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ForumPage;

