import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PaperRollsRequestSchema from './schema';

import { Box, Grid, Button, TextField } from '@mui/material';

const PaperRollsRequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PaperRollsRequestSchema),
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

        <TextField
          size="small"
          error={errors.paperRoll?.address}
          label="Direccion"
          variant="outlined"
          {...register('paperRoll.address')}
          helperText={errors.paperRoll?.address?.message}
        />

        <TextField
          size="small"
          type="number"
          error={errors.paperRoll?.amount}
          label="Cantidad"
          variant="outlined"
          {...register('paperRoll.amount')}
          helperText={errors.paperRoll?.amount?.message}
        />

        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Solicitar
        </Button>
      </Grid>
    </Box>
  );
};

export default PaperRollsRequestForm;
