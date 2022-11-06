import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { TotalWeekData } from '../utils/atoms';
import { FILTER_LIST } from '../utils/constants';
import CardItemWrapper from '../components/CardItemWrapper';

export default function StatusOverview() {
  const selectedData = useRecoilValue(TotalWeekData);

  return (
    <Grid container mt={4}>
      {Object.entries(FILTER_LIST).map(([key, val]) => (
        <CardItemWrapper my={1.5} py={1}>
          <Typography variant='caption'>{[val]}</Typography>
          <Stack direction='row' justifyContent='space-between'>
            <Typography variant='body1'>
              {selectedData[key]?.toFixed(0)}
            </Typography>
            <Typography variant='body2'>loading...</Typography>
          </Stack>
        </CardItemWrapper>
      ))}
    </Grid>
  );
}
