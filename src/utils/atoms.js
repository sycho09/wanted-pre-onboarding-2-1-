import { atom } from 'recoil';

export const FilteredList = atom({
  key: 'FilteredList',
  default: []
});

export const FirstFilter = atom({
  key: 'FirstFilter',
  default: '매출'
});

export const SecondFilter = atom({
  key: 'SecondFilter',
  default: '광고비용'
});

export const ChartDisplayList = atom({
  key: 'ChartDisplayList',
  default: []
});

export const TotalWeekData = atom({
  key: 'TotalWeekData',
  default: []
});
