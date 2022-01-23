import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Dropdown } from '../../components/Common';

test('should render dropdown', () => {
  render(<Dropdown />);
  const button = screen.getByRole('button');
  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('presentation');
  fireEvent.click(button);
  expect(list).toBeInTheDocument();
  expect(items.length).toBe(3);
});
