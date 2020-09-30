import React from 'react';
import { render } from '@testing-library/react';
import LeftComponent from '../LeftComponent';

import { Provider } from 'react-redux';
import { store } from '../../../Redux/store';

it("Renders Navbar without crashing", () => {
  const {queryByTestId} = render(<Provider store={store}><LeftComponent list={[]}/></Provider>);
  expect(queryByTestId("left-component")).toBeTruthy()
})

const list = [{
  id: 1,
  place: "testPlace",
  clients: [{
    id: 1,
    name: "testName",
    selected: false
  }],
  selectedItems: 0
}];

describe("Displays the message No Clients to Display", () => {
  it("when no value is selected", () => {  
    const {queryByTestId} = render(<Provider store={store}><LeftComponent list={[]}/></Provider>);
    expect(queryByTestId("ntd")).toBeTruthy()
  })
})

describe("Doesnt Display the message No Clients to Display", () => {
  it("when there are selected values", () => {
    const {queryByTestId} = render(<Provider store={store}><LeftComponent list={list}/></Provider>);
    expect(queryByTestId("ntd")).toBeFalsy()
  })
})

