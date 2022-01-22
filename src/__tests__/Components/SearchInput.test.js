import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { SearchInput } from '../../components/Common';

const setup = () => {
  const utils = render(
    <BrowserRouter>
      <SearchInput />
    </BrowserRouter>
  );
  const input = utils.getByLabelText('search-input');
  return {
    input,
    ...utils,
  };
};

test('renders Search Input', () => {
  const { input } = setup()
  fireEvent.change(input, {target: {value: 'sports'}})
  expect(input.value).toBe('sports')      
});

