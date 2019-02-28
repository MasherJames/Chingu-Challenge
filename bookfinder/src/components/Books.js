import React, { useState, Fragment } from "react";
import performDataFetching from "../hooks/hook";

const Books = props => {
  const [query, setQuery] = useState("steve");
  const [isEmpty, setIsEmpty] = useState(false);
  const [fetchedData, isFetching, isError, fetchBooks] = performDataFetching(
    "https://www.googleapis.com/books/v1/volumes?q=steve",
    {
      bookes: []
    }
  );

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (String(query).length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      fetchBooks(e, `https://www.googleapis.com/books/v1/volumes?q=${query}`);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} name="query" />
        {}
        <button type="submit">Submit</button>
        {isEmpty && <span>Error: Please provide a search query first</span>}
      </form>
      {isError && <div>Something is not rigth ...</div>}
      {isFetching ? (
        <div>Wait as we fetch the data ...</div>
      ) : (
        <ul>{console.log(String(query).length)}</ul>
      )}
    </Fragment>
  );
};

export default Books;
