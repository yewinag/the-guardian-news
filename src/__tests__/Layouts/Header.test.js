import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../components/Layouts';
import { BrowserRouter } from 'react-router-dom';

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
