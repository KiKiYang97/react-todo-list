import React from 'react';
import { render } from '@testing-library/react';
import TodoListPage from './page/TodoListPage';

test('renders learn react link', () => {
  const { getByText } = render(<TodoListPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
