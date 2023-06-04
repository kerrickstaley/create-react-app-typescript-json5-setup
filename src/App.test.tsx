import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import en from './i18n/en.json5';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My cool application/i);
  expect(linkElement).toBeInTheDocument();
});


test('json5 file is loaded', () => {
  expect(en).toEqual({'APP.TITLE': 'My cool application'});
});
