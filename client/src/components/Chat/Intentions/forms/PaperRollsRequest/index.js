import React, { useState } from 'react';
import { Box, Grid, Button, TextField, Alert, AlertTitle } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PaperRollsRequestSchema from './schema';

import { createPaperRollsRequest } from '../../../../../api';
import { isEmpty } from '../../../../../utils/functions';

const PaperRollsRequestForm = () => {
  const [paperRolls, updatePaperRolls] = useState({});
  const [isFetched, updateIsFetched] = useState(false);

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

    if (response?.status === 404) {
      setError('rut', {
        message: response?.details,
      });
    }

    if (response?.errors) {
      const { errors } = response;

      Object.keys(errors).forEach((attribute) => {
        errors[attribute].forEach((message) => {
          setError(`paperRoll.${attribute}`, { message });
        });
      });
    }

    updateIsFetched(!isFetched);
    updatePaperRolls(response);
  };

  const renderAlert = () => {
    if (!isEmpty(errors) || !isFetched) return null;

    return (
      <Alert severity="success">
        <AlertTitle>Solicitud generada correctamente</AlertTitle>
        <Button
          href={paperRolls.pdf_url}
          target="_blank"
          startIcon={<AttachFileIcon />}
          size="small"
          color="success"
          variant="outlined"
          sx={{ mt: 1 }}
        >
          Ver Reporte
        </Button>
      </Alert>
    );
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

        <Grid item container alignItems="center" justifyContent="center" sx={{ mt: 5 }}>
          {renderAlert()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaperRollsRequestForm;
