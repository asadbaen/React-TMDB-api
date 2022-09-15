import { useState, useEffect } from "react";
import API from "../API/API";
const useFetchDetailMovie = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetcMovieDetail = async () => {
      try {
        setLoading(true);
        setError(false);
        const movie = await API.getMovieDetail(movieId);
        console.log(movie);
        setState(movie);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetcMovieDetail();
  }, [movieId]);

  return { state, loading, error };
};

export default useFetchDetailMovie;
