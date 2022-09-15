const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY;

// Api search
const SEARCH_URL = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
// api popular
const POPULAR_URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
// api imge
const IMAGE_URL = "https://image.tmdb.org/t/p/";
// size  w300, w780, w1280, original
const BACKDROP_SIZE = "w780";
// poster size, w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780";

export {
  BASE_URL,
  API_KEY,
  SEARCH_URL,
  POPULAR_URL,
  IMAGE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
