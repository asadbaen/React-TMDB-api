import { useState, useEffect } from "react";
import API from "../API/API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const useFetchMovie = () => {
  const [pages, setPages] = useState("");
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  const fetchAll = async (pages) => {
    try {
      setError(false);
      setIsLoading(true);
      const movies = await API.getMovieAll(pages);
      console.log(movies);
      setState((prev) => ({
        ...movies,
        results:
          pages > 1
            ? [...prev.results, ...movies.results]
            : [...movies.results],
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchAll(1);
  }, []);

  // loadmore
  useEffect(() => {
    if (!loadingMore) {
    }
    fetchAll(state.page + 1, pages);
    setLoadingMore(false);
  }, [loadingMore, pages, state.page]);

  return { state, pages, setPages, error, isLoading, setLoadingMore };
};

export default useFetchMovie;
