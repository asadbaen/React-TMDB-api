import axios from "axios";
import { POPULAR_URL, BASE_URL, API_KEY } from "../config/config";

const apiSettings = {
  getMovieAll: async (pages) => {
    const endpoint = `${POPULAR_URL}$page=${pages}`;
    return await (
      await axios(endpoint)
    ).data;
  },

  getMovieDetail: async (movieId) => {
    const endpoint = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (
      await axios(endpoint)
    ).data;
  },
};

export default apiSettings;
