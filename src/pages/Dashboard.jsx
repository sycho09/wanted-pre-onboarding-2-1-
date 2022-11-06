import React from 'react';
import { Card, Stack, Typography } from '@mui/material';
import StatusOverview from '../molecules/StatusOverview';
import WeeklyPicker from '../molecules/WeeklyPicker';
import Chart from '../molecules/Chart';

export default function Dashboard() {
  return (
    <>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='h6' mb={2} sx={{ fontWeight: 'bold' }}>
          광고현황
        </Typography>
        <WeeklyPicker />
      </Stack>
      <Card>
        <StatusOverview />
        <Chart />
      </Card>
    </>
  );
}
