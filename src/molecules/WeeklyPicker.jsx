/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSetRecoilState } from 'recoil';
import { ChartDisplayList, TotalWeekData } from '../utils/atoms';
import { PER_WEEK, START_DATE } from '../utils/constants';
import { getWeeklyData, makeSumList } from '../utils/functions';
import trendDataset from '../utils/mockup/trendDataset.json';

export default function WeeklyPicker() {
  const [value, setValue] = useState('2022-02-10');
  const [showLastDate, setShowLastDate] = useState('2022년 02월 17일');

  const setWeeklyTotalData = useSetRecoilState(TotalWeekData);
  const setSelectedWeek = useSetRecoilState(ChartDisplayList);

  const [startDate, setStartDate] = useState(START_DATE);
  const getDataset = (started) => {
    const {
      report: { daily }
    } = trendDataset;

    const idx = daily.findIndex(
      (el) => new Date(el.date).getTime() === started
    );

    if (idx > 0) {
      const selected = getWeeklyData(daily, idx, idx + PER_WEEK);
      setSelectedWeek(() => selected);

      const selectedSumData = makeSumList(daily, idx, idx + PER_WEEK);
      setWeeklyTotalData(() => selectedSumData);
    }
  };

  useEffect(() => {
    getDataset(startDate);
  }, [startDate]);

  const handleDateChange = (newValue) => {
    setValue(newValue);
    const getLastDate = newValue.add(7, 'd');
    const getStartDate = new Date(newValue.format('YYYY-MM-DD')).getTime();
    setStartDate(() => getStartDate);
    setShowLastDate(() => getLastDate.format('YYYY년 MM월 DD일'));
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          minDate={new Date('2022-02-01')}
          maxDate={new Date('2022-04-13')}
          inputFormat={'YYYY년 MM월 DD일'}
          onChange={(newValue) => handleDateChange(newValue)}
          renderInput={(params) => <TextField size='small' {...params} />}
        />
        <TextField sx={{ mx: 1 }} value={showLastDate} size='small' />
      </LocalizationProvider>
    </Box>
  );
}
