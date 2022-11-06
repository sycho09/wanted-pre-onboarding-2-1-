import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';

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
          <MenuItem key={el} value={el}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
