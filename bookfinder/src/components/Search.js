import React, {
  useState,
  Fragment,
  useRef,
  useEffect,
  useContext
} from "react";
import { AppContext } from "../context";

const Search = props => {
  const {
    query,
    setQuery,
    isError,
    setIsFetching,
    setIsError,
    setFetchedData
  } = useContext(AppContext);

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
    if (String(query).trim().length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setIsFetching(true);
      setIsError(false);
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => {
          if (!response.ok) {
            setIsError(true);
          }
          return response.json();
        })
        .then(data => {
          setIsFetching(false);
          setFetchedData(data);
        })
        .catch(error => {
          setIsError(true);
          setIsFetching(false);
        });
    }
  };

  const isVisible = String(query).trim().length !== 0;

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
        {String(query).trim().length > 0 && (
          <button onClick={handleClick}>&times;</button>
        )}
        <button type="submit" disabled={!isVisible}>
          Submit
        </button>
        {isEmpty && <span>Please enter a search query</span>}
      </form>
      {isError && <div>Something is not rigth ...</div>}
    </Fragment>
  );
};

export default Search;
