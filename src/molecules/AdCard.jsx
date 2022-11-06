/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import CardItem from '../components/CardItem';
import CardItemWrapper from '../components/CardItemWrapper';
import { CARD_LABEL } from '../utils/constants';
import SelectStatus from './SelectStatus';

export default function AdCard({ list }) {
  const [adStatus, setAdStatus] = useState('');

  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent>
        <SelectStatus
          SelectList={['전체', '진행중', '중단됨']}
          selected={adStatus}
          selectHandler={setAdStatus}
        />
        <Grid container>
          {list.map((el, i) => (
            <CardItemWrapper>
              <Typography variant='body1' mb={3}>
                {el.adType}_{el.title}
              </Typography>
              {Object.entries(CARD_LABEL).map(([key, value]) => (
                <CardItem label={[value]} content={el[key]} />
              ))}
              <Button variant='outlined' sx={{ mt: 2 }}>
                수정하기
              </Button>
            </CardItemWrapper>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
