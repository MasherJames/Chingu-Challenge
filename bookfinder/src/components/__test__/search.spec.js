import React, { useContext } from "react";
import { shallow } from "enzyme";
import Search from "../Search";

const mockContext = jest.fn();
jest.mock("../../context.js", () => ({
  Consume: ({ children }) => children(mockContext())
}));

describe("Search test", () => {
  it("Should display books onclick", () => {
    const wrapper = shallow(<Search />, mockContext);
    expect(wrapper).toMatchSnapshot();
  });
});
