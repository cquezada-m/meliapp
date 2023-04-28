import React from 'react';
import { Grid, Box } from '@mui/material';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import * as dayjs from 'dayjs';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const transformArray = (arr) => {
  const dates = arr.map(({ fecha }) => dayjs(fecha).format('DD/MM'));
  const values = arr.map(({ valor }) => valor);
  return [dates, values];
};

const IndicatorChart = ({ seriesData }) => {
  const [dates, values] = transformArray(seriesData);

  const data = {
    labels: dates.reverse(),
    datasets: [
      {
        label: 'Variacion 2023',
        data: values.reverse(),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Grid item container alignItems="center" justifyContent="center" sx={{ mt: 5 }}>
      <Line options={options} data={data} />
      <Box sx={{ fontFamily: 'Monospace', fontSize: 'default', mt: 5 }}>
        <span>
          Valor Actual: <strong> {values.at(-1)}</strong>
        </span>
      </Box>
    </Grid>
  );
};

export default IndicatorChart;
