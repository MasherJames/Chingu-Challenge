import React, { useContext } from "react";
import { AppContext } from "../context";
import Book from "./Book";
import Loader from "./Loader";

const Books = () => {
  const { fetchedData, isFetching } = useContext(AppContext);
  const books = fetchedData.items || [];

  if (books.length === 0) {
    return <span>No books found, Enter a valid query to search</span>;
  }

  return <div>{isFetching ? <Loader /> : <Book books={books} />}</div>;
};

export default Books;
