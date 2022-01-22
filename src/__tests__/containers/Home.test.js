import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from '../../containers/Home';

test('should render Home page listing item', () => {
  render(<Home />);
  const firstArticleTitle = screen.getByText('Top Stories');
  const secondArticleTitle = screen.getByText('Sports');  
  expect(firstArticleTitle).toBeInTheDocument();
  expect(secondArticleTitle).toBeInTheDocument();  
  
});
