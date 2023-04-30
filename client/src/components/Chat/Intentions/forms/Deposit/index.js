import React, { useState } from 'react';
import { Box, Grid, Button, TextField, Alert } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DepositSchema from './schema';

import * as dayjs from 'dayjs';
import { formatCurrency, isEmpty } from '../../../../../utils/functions';

import { fetchDeposit } from '../../../../../api';

const DepositForm = () => {
  const [fundsData, updateFundsData] = useState(null);
  const hasBalance = !isEmpty(fundsData) && fundsData?.amount > 0;

  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, isDirty, errors },
  } = useForm({
    resolver: yupResolver(DepositSchema),
  });

  const onSubmit = async (data) => {
    const response = await fetchDeposit(data);

    if (response?.status === 404) {
      setError('rut', {
        message: response?.details,
      });
    }

    updateFundsData({ ...data, amount: response.funds });
  };

  const renderAlert = () => {
    if (!isEmpty(errors)) return null;

    const color = hasBalance ? 'success' : 'warning';
    return (
      <Alert severity={color}>
        {hasBalance ? `Fondos disponibles ${formatCurrency(fundsData?.amount)} ` : 'No tiene fondos disponibles'}
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
        <DatePicker
          slotProps={{ textField: { size: 'small' } }}
          defaultValue={dayjs()}
          error={errors.availableAt}
          label="Fecha Deposito"
          {...register('availableAt')}
          helperText={errors.availableAt?.message}
        />

        <Button disabled={!isDirty || !isValid} onClick={handleSubmit(onSubmit)} variant="contained">
          Consultar
        </Button>

        <Grid item container alignItems="center" justifyContent="center" sx={{ mt: 5 }}>
          {renderAlert()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DepositForm;
