import { FormControl, MenuItem, Select, styled } from '@mui/material';
import React, { useState } from 'react';

export default function SelectStatus({
  SelectList,
  selected,
  selectHandler,
  isDisabled = false
}) {
  const handleChange = (event) => {
    selectHandler(event.target.value);
  };

  return (
    <FormControl size='small' sx={{ minWidth: { md: 180, sm: 100 }, mx: 2 }}>
      <Select
        value={selected}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        disabled={isDisabled}
      >
        <MenuItem value=''>
          <em>{SelectList[0]}</em>
        </MenuItem>
        {SelectList.map((el) => (
          <MenuItem value={el}>{el}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
