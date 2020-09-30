import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import { store } from '../Redux/store';

it("Renders without crashing", () => {
  const {queryByTestId} = render(<Provider store={store}><App /></Provider>);
  expect(queryByTestId("home")).toBeTruthy()
  expect(queryByTestId("navbar")).toBeTruthy()
})