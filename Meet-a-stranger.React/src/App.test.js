import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("main-app-div")).toBeTruthy();
});
