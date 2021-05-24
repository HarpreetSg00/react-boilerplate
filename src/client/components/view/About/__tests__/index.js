import * as React from 'react';
import { render, screen } from '@testing-library/react';
import About from '..';

test('Render Welcome Message', () => {
  render(<About />);
  expect(screen.getByText(/about page/i)).toBeInTheDocument();
});
