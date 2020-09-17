import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Testing test framework', () => {
  let myVar = true;
  expect(myVar).toBe(true);
});