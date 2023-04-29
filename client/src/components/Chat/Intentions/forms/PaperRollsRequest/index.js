import React from 'react';
import { Box, Grid, Button, TextField } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PaperRollsRequestSchema from './schema';

import { createPaperRollsRequest } from '../../../../../api';
import { isEmpty } from '../../../../../utils/functions';

const PaperRollsRequestForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, isDirty, errors },
  } = useForm({
    resolver: yupResolver(PaperRollsRequestSchema),
  });

  const onSubmit = async (data) => {
    const response = await createPaperRollsRequest(data);
  };

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

        <Button disabled={!isDirty || !isValid} onClick={handleSubmit(onSubmit)} variant="contained">
          Solicitar
        </Button>
      </Grid>
    </Box>
  );
};

export default PaperRollsRequestForm;
