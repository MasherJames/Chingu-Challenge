import React, { useState, useEffect } from "react";

const performDataFetching = (initialurl, initialData) => {
  const [url, setUrl] = useState(initialurl);
  const [fetchedData, setFetchedData] = useState(initialData);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

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

  return [fetchedData, isFetching, isError, fetchBooks];
};

export default performDataFetching;
