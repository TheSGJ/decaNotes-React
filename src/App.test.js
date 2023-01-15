import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Contact react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});
