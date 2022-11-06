import { Grid } from '@mui/material';
import React from 'react';

export default function CardItemWrapper({ children, my = 2.5, py = 3 }) {
  return (
    <Grid
      item
      xs={3}
      sx={{ border: '1px solid grey', borderRadius: 2 }}
      mx={2.5}
      my={my}
      px={2}
      py={py}
    >
      {children}
    </Grid>
  );
}
