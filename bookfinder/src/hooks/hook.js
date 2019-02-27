import React, { useState, useEffect } from "react";

const performDataFetching = url => {
  const [fetchedData, setFetchedData] = useState({ bookes: [] });
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
        setIsloading(false);
        setFetchedData(data);
      })
      .catch(error => {
        setIsError(true);
        setIsloading(false);
      });
  }, [url]);
  return [fetchedData, isFetching, isError];
};

export default performDataFetching;
