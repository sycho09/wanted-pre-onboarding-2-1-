import React from 'react';

import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import FilterContainer from '../molecules/FilterContainer';

export default function Dashboard() {
  return (
    <>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='h6' mb={2} sx={{ fontWeight: 'bold' }}>
          광고현황
        </Typography>
      </Stack>

      <FilterContainer />
    </>
  );
}
