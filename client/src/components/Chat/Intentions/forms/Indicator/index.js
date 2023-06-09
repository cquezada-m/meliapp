import React, { useState } from 'react';
import { Box, Grid, Button, TextField, MenuItem } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import IndicatorSchema from './schema';

import { fetchIndicator } from '../../../../../api';
import { IndicatorList } from '../../../../../utils/IndicatorList';
import IndicatorChart from './chart';
import { isEmpty } from '../../../../../utils/functions';
import { handleError } from '../utils';

const IndicatorForm = () => {
  const [chartData, updateChartData] = useState([]);
  const [isFetched, updateIsFetched] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, isDirty, errors },
  } = useForm({
    resolver: yupResolver(IndicatorSchema),
  });

  const onSubmit = async (data) => {
    const response = await fetchIndicator(data);
    handleError(response, setError);

    const { serie } = response;

    updateIsFetched(!isFetched);
    updateChartData(serie);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
    >
      <Grid item container alignItems="center" justifyContent="center">
        <TextField
          size="small"
          select
          error={errors.name}
          label="Indicador"
          variant="outlined"
          {...register('name')}
          helperText={errors.name?.message}
          defaultValue={IndicatorList[0].value}
        >
          {IndicatorList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button disabled={!isDirty || !isValid} onClick={handleSubmit(onSubmit)} variant="contained">
          Consultar
        </Button>

        {!isEmpty(chartData) && <IndicatorChart seriesData={chartData} />}
      </Grid>
    </Box>
  );
};

export default IndicatorForm;
