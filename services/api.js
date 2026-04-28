const API_KEY = "a9a4199f";

export const searchMovies = async (query) => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await res.json();
    return data.Search || [];
  } catch (e) {
    return [];
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return null;
  }
};