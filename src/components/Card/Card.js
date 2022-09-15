import React from "react";
import PropTypes from "prop-types";
import {
  CardDate,
  CardImg,
  CardInfo,
  CardOverflow,
  CardRating,
  CardTitle,
  Wrapper,
} from "../Card/Card.styles";
import { Link } from "react-router-dom";

const Card = ({ clickable, movieId, image, title, info, rating, date }) => {
  return (
    <Wrapper>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <CardOverflow className="overflow">
            <CardTitle>{title}</CardTitle>
            <CardInfo>{info}</CardInfo>
            <CardDate>{date}</CardDate>

            <CardRating>{rating}</CardRating>
          </CardOverflow>
          <CardImg src={image} alt="card-movie" />
        </Link>
      ) : (
        <CardImg src={image} alt="card-movie" />
      )}
    </Wrapper>
  );
};
Card.propTypes = {
  clickable: PropTypes.bool,
  movieId: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(String),
  ]),

  date: PropTypes.string,
};
export default Card;
