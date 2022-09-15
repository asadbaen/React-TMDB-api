import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import { Image } from "./thumnail.styled";

const Thumbnail = ({ image, movieID, clickable, movieHeight }) => {
  return (
    <React.Fragment>
      {clickable ? (
        <Link to={`/${movieID}`}>
          <Image src={image} alt="movie-thumb" movieHeight={movieHeight} />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" movieHeight={movieHeight} />
      )}
    </React.Fragment>
  );
};

Thumbnail.prototype = {
  image: PropTypes.string,
  movieID: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumbnail;
