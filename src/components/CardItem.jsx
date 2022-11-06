import { InputAdornment, TextField } from '@mui/material';
import React from 'react';

export default function CardItem({ label, content }) {
  return (
    <TextField
      sx={{ width: '100%' }}
      disabled
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>{label}</InputAdornment>
        ),
        sx: {
          '& input': {
            textAlign: 'right'
          },
          '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: '#000'
          }
        }
      }}
      variant='standard'
      value={content}
    />
  );
}
