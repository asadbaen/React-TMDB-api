import React from "react";
import { useParams } from "react-router-dom";
import { BACKDROP_SIZE, IMAGE_URL } from "../config/config";
import useFetchDetailMovie from "../hooks/useFetchDetailMovie";
const DetailMovie = () => {
  const { movieId } = useParams();
  const { state, loading, error } = useFetchDetailMovie(movieId);
  if (loading) return <h1>Loading ....</h1>;
  if (error) return <h1>Error 404 NOT FOUNT</h1>;
  return (
    <div>
      <h1 className="d-flex display-5 align-items-center justify-content-center text-success">
        <p>{movieId}</p>
      </h1>
      <img
        src={`${IMAGE_URL}${BACKDROP_SIZE}/${state.backdrop_path}`}
        alt={state.title}
      />
      <p>{state.original_title}</p>
      <p>{state.overview}</p>
    </div>
  );
};

export default DetailMovie;
