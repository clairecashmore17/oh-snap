import React from "react";

//retrieve function from the React Testing LIbrary
import { render, cleanup } from "@testing-library/react";

// extend-expect package, offers access to custom matchers that are used to test DOM elements
import "@testing-library/jest-dom/extend-expect";

import About from "..";
const { asFragment } = render(<About />);
//Configure our test environment

//then use describe function to decalre the component we are testing
describe("About component", () => {
  //First Test
  // it function : test and it are interchangeable
  it("render", () => {
    render(<About />);
  });
  //Second Test
  // snapshot is a serialized version of the DOM node structure enabled by jest
  it("matches snapshot DOM note structure", () => {
    //Comparing whether the expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  });
});

// ensures that after each test, no leftover memory data that could give false results
afterEach(cleanup);
