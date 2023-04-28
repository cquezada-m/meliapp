import * as React from 'react';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Intentions from './Intentions';
import MeliIcon from '../../meli.png';

const Message = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card style={{ marginTop: '1rem' }}>
        <CardHeader avatar={<Avatar src={MeliIcon}></Avatar>} title="MeliApp" />
        <CardContent>
          <Intentions />
        </CardContent>
      </Card>
    </LocalizationProvider>
  );
};
export default Message;
