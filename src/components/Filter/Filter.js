import React from 'react';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  return (
    <div>
      <Label>
        <h3>Find contacts by name</h3>
        <Input placeholder="find contact" type="text" name="filter" />
      </Label>
    </div>
  );
};
