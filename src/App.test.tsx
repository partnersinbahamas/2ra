import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const application = screen.getByRole('main')
  expect(application).toBeInTheDocument();
});
