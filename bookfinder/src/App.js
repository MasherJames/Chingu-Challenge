import React, { useState } from "react";
import "./App.css";
import { AppContext } from "./context";
import Search from "./components/Search";
import Books from "./components/Books";

const App = props => {
  const [fetchedData, setFetchedData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <AppContext.Provider
      value={{
        fetchedData,
        setFetchedData,
        isFetching,
        setIsFetching,
        query,
        setQuery,
        isError,
        setIsError
      }}
    >
      <div>
        <Search />
        <Books />
      </div>
    </AppContext.Provider>
  );
};

export default App;
