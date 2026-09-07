const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Accepts "Title", "Title (1999)" or "Title(1999)" and splits the year out.
// TMDB's search endpoint does not match years embedded in the query string,
// so the year has to travel as its own parameter.
const parseTitle = (movieName) => {
  const match = movieName.match(/^(.*?)\s*\((\d{4})\)\s*$/);
  return match
    ? { title: match[1].trim(), year: match[2] }
    : { title: movieName.trim(), year: null };
};

const fetchMovieByName = async (movieName) => {
  const { title, year } = parseTitle(movieName);
  const params = new URLSearchParams({ api_key: API_KEY, query: title });
  if (year) params.set('primary_release_year', year);

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?${params}`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const movie = data?.results?.[0];

    if (!movie) {
      console.warn(`No TMDB match: ${movieName}`);
      return null;
    }
    // Without a poster the card would render a broken image.
    if (!movie.poster_path) {
      console.warn(`No poster art: ${movie.title}`);
      return null;
    }

    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
    };
  } catch (error) {
    console.error(`Error fetching movie: ${movieName}`, error);
    return null;
  }
};

export const createMovieList = async (movieNames) => {
  const movies = await Promise.all(movieNames.map(fetchMovieByName));
  return movies.filter(Boolean);
};
