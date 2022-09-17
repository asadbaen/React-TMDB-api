import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BACKDROP_SIZE, IMAGE_URL } from "../config/config";
import useFetchDetailMovie from "../hooks/useFetchDetailMovie";
// style
import "../assets/styles/detail.css";
const DetailMovie = () => {
  const { movieId } = useParams();
  const { state, loading, error } = useFetchDetailMovie(movieId);
  console.log(state);
  if (loading) return <h1>Loading ....</h1>;
  if (error) return <h1>Error 404 NOT FOUNT</h1>;
  return (
    <div className="style_card">
      <div className="card_thumnail">
        <img
          src={`${IMAGE_URL}${BACKDROP_SIZE}/${state.backdrop_path}`}
          alt={state.title}
        />
      </div>
      <Card.Body className="card-body">
        <Card.Title style={{ fontSize: "30px" }} className="card-title">
          {state.title}
        </Card.Title>
        <p style={{ fontSize: "15px" }}>
          <span style={{ color: "bisque" }}>Release </span>
          {state.release_date}
        </p>
        <Card.Text style={{ fontSize: "20px" }}>{state.overview}</Card.Text>
        <p style={{ marginBottom: "0", fontSize: "15px", color: "yellow" }}>
          Popularity
        </p>
        <span style={{ marginTop: "0", fontSize: "20px" }}>
          {state.popularity}
        </span>
      </Card.Body>
    </div>
  );
};

export default DetailMovie;
