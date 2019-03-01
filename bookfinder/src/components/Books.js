import React, {
  useState,
  Fragment,
  useRef,
  useEffect,
  useContext
} from "react";
import { AppContext } from "../context";
import performDataFetching from "../hooks/hook";

const Books = props => {
  const {
    query,
    setQuery,
    isError,
    setIsFetching,
    isFetching,
    fetchedData
  } = useContext(AppContext);
  const fetchBooks = performDataFetching(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`
  );
  const [isEmpty, setIsEmpty] = useState(false);
  const inputQuery = useRef();

  useEffect(() => {
    inputQuery.current.focus();
  });

  const handleClick = event => {
    setQuery("");
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (String(query).length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setIsFetching(true);
      fetchBooks(
        event,
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          name="query"
          ref={inputQuery}
        />
        {String(query).length > 0 && (
          <button onClick={handleClick}>&times;</button>
        )}
        <button type="submit">Submit</button>
        {isEmpty && <span>Please enter a search query</span>}
      </form>
      {isError && <div>Something is not rigth ...</div>}
      {isFetching ? (
        <div>Wait as we fetch the data ...</div>
      ) : (
        <ul>{console.log(fetchedData)}</ul>
      )}
    </Fragment>
  );
};

export default Books;
