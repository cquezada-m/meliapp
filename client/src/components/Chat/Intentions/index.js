import React, { useState } from 'react';
import { Box, Grid, Chip } from '@mui/material';

import DepositForm from './forms/Deposit';
import IndicatorForm from './forms/Indicator';
import PaperRollsRequestForm from './forms/PaperRollsRequest';

const actions = [
  { label: 'Consulta de Deposito', id: 1, formComponent: <DepositForm /> },
  { label: 'Solitar Rollos de Papel', id: 2, formComponent: <PaperRollsRequestForm /> },
  { label: 'Indicadores', id: 3, formComponent: <IndicatorForm /> },
];

const Intentions = () => {
  const [selectedAction, updateSelectedAction] = useState(actions[0]);

  return (
    <Box>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        {actions.map((action) => {
          const selected = action.id === selectedAction.id;
          return (
            <Chip
              color={selected ? 'primary' : 'default'}
              label={action.label}
              sx={{ m: 0.5 }}
              onClick={() => updateSelectedAction(action)}
            />
          );
        })}
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        <h1>{selectedAction.formComponent}</h1>
      </Grid>
    </Box>
  );
};

export default Intentions;
