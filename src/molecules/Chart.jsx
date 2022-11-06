import React, { useEffect, useMemo, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Box } from '@mui/material';
import { FilterListKeys, FilterListValues } from '../utils/constants';
import { ChartDisplayList, FirstFilter, SecondFilter } from '../utils/atoms';
import { setOptions } from '../utils/functions';
import SelectStatus from './SelectStatus';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const selectedWeek = useRecoilValue(ChartDisplayList);
  const { date: labels, cost, convValue } = selectedWeek;

  const [firstFilter, setFirstFilter] = useRecoilState(FirstFilter);
  const [secondFilter, setSecondFilter] = useRecoilState(SecondFilter);

  const [secondList, setSecondList] = useState([]);
  const [dataset1, setDataset1] = useState([]);
  const [dataset2, setDataset2] = useState([]);

  useEffect(() => {
    if (firstFilter) {
      const firstIndex = FilterListKeys[FilterListValues.indexOf(firstFilter)];
      setDataset1(() => selectedWeek[firstIndex]);

      const filtered = FilterListValues.filter((el) => el !== firstFilter);
      setSecondList(filtered);
    }
  }, [firstFilter, selectedWeek]);

  useEffect(() => {
    if (secondFilter) {
      const secondIndex =
        FilterListKeys[FilterListValues.indexOf(secondFilter)];
      setDataset2(() => selectedWeek[secondIndex]);
    }
  }, [secondFilter, selectedWeek]);

  const data = {
    labels,
    datasets: [
      {
        label: firstFilter,
        data: dataset1 || convValue,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y'
      },
      {
        label: secondFilter,
        data: dataset2 || cost,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1'
      }
    ]
  };

  const options = useMemo(
    () => setOptions(firstFilter, secondFilter),
    [firstFilter, secondFilter]
  );

  return (
    <Box my={2} p={1}>
      <SelectStatus
        SelectList={FilterListValues}
        selected={firstFilter}
        selectHandler={setFirstFilter}
      />

      <SelectStatus
        SelectList={secondList.length > 0 ? secondList : FilterListValues}
        selected={secondFilter}
        selectHandler={setSecondFilter}
        isDisabled={!firstFilter}
      />
      {selectedWeek && (
        <Box p={3}>
          <Line options={options} data={data} />
        </Box>
      )}
    </Box>
  );
}
