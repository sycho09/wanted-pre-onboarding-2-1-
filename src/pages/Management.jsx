import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import AdCard from '../molecules/AdCard';
import adDataset from '../utils/mockup/adDataset.json';
import AdStatus from '../utils/type';

export default function Management() {
  const [adList, setAdList] = useState([]);

  const makeStatusCards = () => {
    const { ads: list } = adDataset;
    const newList = list.map((status) => new AdStatus(status));
    setAdList(() => newList);
  };

  useEffect(() => {
    makeStatusCards();
  }, []);

  return (
    <>
      <Typography variant='h6' mb={2} sx={{ fontWeight: 'bold' }}>
        광고관리
      </Typography>
      {adList && <AdCard list={adList} />}
    </>
  );
}
