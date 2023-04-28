import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DepositSchema from './schema';

import { Box, Grid, Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as dayjs from 'dayjs';

const DepositForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(DepositSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
    >
      <Grid item container direction="row" alignItems="center" justifyContent="center">
        <TextField
          size="small"
          error={errors.rut}
          label="Rut"
          variant="outlined"
          {...register('rut')}
          helperText={errors.rut?.message}
        />
        <DatePicker
          slotProps={{ textField: { size: 'small' } }}
          defaultValue={dayjs()}
          error={errors.availableAt}
          label="Fecha Deposito"
          {...register('availableAt')}
          helperText={errors.availableAt?.message}
        />

        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Consultar
        </Button>
      </Grid>
    </Box>
  );
};

export default DepositForm;
