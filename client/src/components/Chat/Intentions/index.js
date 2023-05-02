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
  const [selectedAction, updateSelectedAction] = useState(null);

  return (
    <Box>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        {actions.map((action, index) => {
          const selected = action.id === selectedAction?.id;
          return (
            <Chip
              key={`action-${index}`}
              color={selected ? 'warning' : 'default'}
              label={action.label}
              sx={{ m: 0.5 }}
              onClick={() => updateSelectedAction(action)}
            />
          );
        })}
      </Grid>
      {selectedAction && (
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
          <h1>{selectedAction.formComponent}</h1>
        </Grid>
      )}
    </Box>
  );
};

export default Intentions;
