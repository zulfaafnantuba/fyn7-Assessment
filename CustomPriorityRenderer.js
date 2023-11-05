import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CustomPriorityRenderer = ({ data, handleChange, path, schema }) => {
  const options = schema.enum;

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Priority</InputLabel>
      <Select
        value={data || ''}
        onChange={(event) => handleChange(path, event.target.value)}
        label="Priority"
      >
        {options.map((option, index) => (
          <MenuItem key={option} value={option}>
            <span
              style={{
                color: option === 'High' ? 'red' : option === 'Medium' ? 'orange' : 'green',
              }}
            >
              {option}
            </span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomPriorityRenderer;
