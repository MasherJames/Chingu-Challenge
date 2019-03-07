import { shallow } from "enzyme";
import Book from "../Book";
import React from "react";

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

  it("renders correctly when it has multiple books", () => {
    const wrapper = shallow(<Book books={defProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a list of books ", () => {
    const wrapper = shallow(<Book books={defProps} />);
    expect(wrapper.find(".book-item")).toBeDefined();
    expect(wrapper.find(".book-item")).toHaveLength(defProps.length);
  });
});
