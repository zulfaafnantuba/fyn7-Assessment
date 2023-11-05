import React from 'react';
import { KeyboardDatePicker } from '@mui/pickers';

const CustomDateRenderer = ({ data, handleChange, path }) => {
  return (
    <KeyboardDatePicker
      value={data || null}
      onChange={(date) => handleChange(path, date)}
      label="Due Date"
      format="MM/dd/yyyy"
      fullWidth
      variant="inline"
      inputVariant="outlined"
    />
  );
};

export default CustomDateRenderer;
