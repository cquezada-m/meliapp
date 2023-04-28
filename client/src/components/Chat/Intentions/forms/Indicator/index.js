import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import IndicatorSchema from './schema';

import { Box, Grid, Button, TextField } from '@mui/material';

const IndicatorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(IndicatorSchema),
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
          error={errors.name}
          label="Indicador"
          variant="outlined"
          {...register('name')}
          helperText={errors.name?.message}
        />

        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Consultar
        </Button>
      </Grid>
    </Box>
  );
};

export default IndicatorForm;
