import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../NavBar';

it("Renders Navbar without crashing", () => {
  const {queryByTestId} = render(<NavBar />);
  expect(queryByTestId("nav-tag")).toBeTruthy()
})