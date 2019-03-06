import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import Book from "../Book";
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Book test", () => {
  let defProps = [
    {
      id: "a",
      volumeInfo: {
        imageLinks: "k",
        publisher: "l",
        authors: "z",
        title: "y",
        infolink: "b"
      }
    },
    {
      id: "b",
      volumeInfo: {
        imageLinks: "k",
        publisher: "l",
        authors: "z",
        title: "y",
        infolink: "b"
      }
    },
    {
      id: "c",
      volumeInfo: {
        imageLinks: "k",
        publisher: "l",
        authors: "z",
        title: "y",
        infolink: "b"
      }
    }
  ];

  it("renders correctly", () => {
    const wrapper = shallow(<Book books={defProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
