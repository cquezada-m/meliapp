import * as React from 'react';
import { CardHeader, CardContent, Avatar } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Intentions from './Intentions';
import MeliIcon from '../../meli.png';

const Message = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CardHeader avatar={<Avatar src={MeliIcon}></Avatar>} title="MeliApp" />
      <CardContent>
        <Intentions />
      </CardContent>
    </LocalizationProvider>
  );
};
export default Message;
