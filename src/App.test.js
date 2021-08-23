import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders correctly", () => {
    shallow(<App />);
  });

  it("should update state on change", () => {
    const changeValue = jest.fn();
    const wrapper = shallow(<App onChange={changeValue} />);
    const handleChange = jest.spyOn(React, "useState");
    handleChange.mockImplementation((value) => [value, changeValue]);
    wrapper.find("#selector").simulate("click");
    expect(changeValue).toBeTruthy();
  });
});
