import { atom } from 'recoil';

export const FilteredList = atom({
  key: 'FilteredList',
  default: []
});

export const SelectedFirstFilter = atom({
  key: 'SelectedFirstFilter',
  default: '매출'
});

export const SelectedSecondFilter = atom({
  key: 'SelectedSecondFilter',
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
