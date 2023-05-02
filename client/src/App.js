import React from 'react';

import { Grid } from '@mui/material';
import Chat from './components/Chat';
import { styled } from '@mui/material/styles';

const ChatContainer = styled(Grid)(() => ({
  height: '75vh',
  borderRadius: '16px',
  backgroundColor: '#fff',
  padding: '1rem',
  maxHeight: '100%',
}));

const App = () => {
  return (
    <Grid
      item
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{
        minHeight: '100vh',
        backgroundColor: '#FFE901',
      }}
    >
      <ChatContainer item xs={8} md={4} alignItems="center" justifyContent="center">
        <Chat></Chat>
      </ChatContainer>
    </Grid>
  );
};

export default App;
