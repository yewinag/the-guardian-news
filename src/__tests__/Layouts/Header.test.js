import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../components/Layouts';

// test Header Title
test('render Header Title', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const header = screen.getByTitle('The Peaks');
  expect(header).toBeInTheDocument();
});
