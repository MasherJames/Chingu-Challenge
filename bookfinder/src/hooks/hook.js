import { useEffect, useState } from "react";

const performDataFetching = initialurl => {
  const [fetchedData, setFetchedData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(initialurl);

  useEffect(() => {
    setIsError(false);
    setIsFetching(true);
    fetch(url)
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
  }, [url]);

  const fetchBooks = (e, url) => {
    e.preventDefault();
    setUrl(url);
  };

  return fetchBooks;
};

export default performDataFetching;
