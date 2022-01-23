import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArticleHeader } from '../../components/Layouts';

// if title = "search" then
test('should render title header', () => {
  render(<ArticleHeader title="search" />);
  const headerText = screen.getByText('search');
  expect(headerText).toBeInTheDocument();
  const bookmarkLink = screen.getByRole('link');
  expect(bookmarkLink).toHaveAttribute('href', '/bookmarks');
});

// if title = "All Bookmarks", not to have bookmark link
test('should render not bookmarks link', () => {
  render(<ArticleHeader title="All Bookmarks" />);
  const headerText = screen.getByText('All Bookmarks');
  expect(headerText).toBeInTheDocument();
});
