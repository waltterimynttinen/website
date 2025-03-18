const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const fetchMovieByName = async (movieName) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const movie = data.results[0]; 

    if (movie) {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
      };
    }
  } catch (error) {
    console.error(`Error fetching movie: ${movieName}`, error);
    return null; 
  }
};


export const createMovieList = async (movieNames) => {
  const movieList = [];

  for (let name of movieNames) {
    const movie = await fetchMovieByName(name);
    if (movie) {
      movieList.push(movie); 
    }
  }

  return movieList;
};




