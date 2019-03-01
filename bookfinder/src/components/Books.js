import React, { useContext } from "react";
import { AppContext } from "../context";
import Book from "./Book";

const Books = () => {
  const { fetchedData, isFetching } = useContext(AppContext);
  const books = fetchedData.items || [];

  if (books.length === 0) {
    return <span>No books found</span>;
  }

  return (
    <div>{isFetching ? "wait as we get books" : <Book books={books} />}</div>
  );
};

export default Books;
