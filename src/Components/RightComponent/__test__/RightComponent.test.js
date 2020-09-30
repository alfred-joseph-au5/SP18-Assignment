import React from 'react';
import { render } from '@testing-library/react';
import RightComponent from '../RightComponent';

import { Provider } from 'react-redux';
import { store } from '../../../Redux/store';

it("Renders Navbar without crashing", () => {
  const {queryByTestId} = render(<Provider store={store}><RightComponent list={[]}/></Provider>);
  expect(queryByTestId("right-component")).toBeTruthy()
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

describe("Displays the message No value selected", () => {
  it("when no value is selected", () => {  
    const {queryByTestId} = render(<Provider store={store}><RightComponent list={list}/></Provider>);
    expect(queryByTestId("nvs")).toBeTruthy()
  })
})

describe("Doesnt Display the message No value selected", () => {
  it("when there are selected values", () => {  
    list[0].clients[0].selected = true;
    list[0].selectedItems = 1;
    const {queryByTestId} = render(<Provider store={store}><RightComponent list={list}/></Provider>);
    expect(queryByTestId("nvs")).toBeFalsy()
  })
})

