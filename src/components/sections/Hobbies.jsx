import React, { useEffect, useState, useRef } from "react";
import {createMovieList} from "../../utils/tmdbApi";
import { fetchAlbumData } from "../../utils/lastfmApi";

export const Hobbies = () => {
      const [movies, setMovies] = useState([]);
      const [albums, setAlbums] = useState([]);
      const movieCarouselRef = useRef(null);
      const albumCarouselRef = useRef(null);
    
      useEffect(() => {
        const movieNames = [
          "Punch-Drunk Love",
          "Blade Runner(1982)",
          "After Hours(1985)",
          "Dog Day Afternoon",
          "Uncut Gems",
          "Fargo",
          "The Piano Teacher",
          "The Godfather(1972)",
          "12 Monkeys",
          "Adaptation.",
          "Good Time",
          "Aftersun (2022)",
          "Lost in Translation",
          "Akira",
          "Dazed and Confused",
          "Taxi Driver(1976)",
          "Synedoche, New York",
          "Pulp Fiction",
          "The Godfather Part II(1974)",
          "Blue Velvet",
          "Apocalypse Now",
          "Eternal Sunshine of the Spotless Mind",
          "Reservoir Dogs"
        ];

        const albumsWithArtists = [
          { albumName: 'Since I Left You', artistName: 'The Avalanches' },
          { albumName: 'The Dark Side of the Moon', artistName: 'Pink Floyd' },
          { albumName: 'In Rainbows', artistName: 'Radiohead' },
          { albumName: 'Depression Cherry', artistName: 'Beach House' },
          { albumName: 'Bloom', artistName: 'Beach House' },
          { albumName: 'Teen Dream', artistName: 'Beach House' },
          { albumName: 'Wish You Were Here', artistName: 'Pink Floyd' },
          { albumName: 'Atomizer', artistName: 'Big Black' },
          { albumName: 'Rumours', artistName: 'Fleetwood Mac' },
          { albumName: 'The Velvet Underground', artistName: 'The Velvet Underground' },
          { albumName: 'Titanic Rising', artistName: 'Weyes Blood' },
          { albumName: 'Let It Be', artistName: 'The Replacements' },
          { albumName: 'Abbey Road', artistName: 'The Beatles' },
          { albumName: "If You're Feeling Sinister", artistName: "Belle and Sebastian" },
          { albumName: 'Substrata', artistName: 'Biosphere' },
          { albumName: 'Paranoid', artistName: 'Black Sabbath' },
          { albumName: 'Perfect From Now On', artistName: 'Built to Spill' },
          { albumName: 'Untrue', artistName: 'Burial' },
          { albumName: 'Slide', artistName: 'George Clanton' },
          { albumName: 'Heaven or Las Vegas', artistName: 'Cocteau Twins' },
          { albumName: 'Discovery', artistName: 'Daft Punk' },
          { albumName: 'Halcyon Digest', artistName: 'Deerhunter' },
          { albumName: 'The Doors', artistName: 'The Doors' },
          { albumName: 'Blood on the Tracks', artistName: 'Bob Dylan' },
          { albumName: 'LONG SEASON', artistName: 'Fishmans' },
          { albumName: 'House of Sugar', artistName: 'Alex G' },
          { albumName: 'Entertainment!', artistName: 'Gang of Four' },
          { albumName: 'Turn on the Bright Lights', artistName: 'Interpol' },
          { albumName: 'Unknown Pleasures', artistName: 'Joy Division' },
          { albumName: 'Madvillainy', artistName: 'Madvillain' },
          { albumName: 'The Holy Bible', artistName: 'Manic Street Preachers' },
          { albumName: 'Mezzanine', artistName: 'Massive Attack' },
          { albumName: 'Blue', artistName: 'Joni Mitchell' },
          { albumName: 'The Infamous', artistName: 'Mobb Deep' },
          { albumName: 'Loveless', artistName: 'My Bloody Valentine' },
          { albumName: 'In Utero', artistName: 'Nirvana' },
          { albumName: 'Definitely Maybe', artistName: 'Oasis' },
          { albumName: 'Blonde', artistName: 'Frank Ocean' },
          { albumName: 'Crooked Rain, Crooked Rain', artistName: 'Pavement' },
          { albumName: 'Pulling Our Weight', artistName: 'The Radio Dept.' },
          { albumName: 'OK Computer', artistName: 'Radiohead' },
          { albumName: 'Souvlaki', artistName: 'Slowdive' },
          { albumName: 'The Queen Is Dead', artistName: 'The Smiths' },
          { albumName: 'Jeopardy', artistName: 'The Sound' },
          { albumName: 'Fun House', artistName: 'The Stooges' },
          { albumName: 'Is This It', artistName: 'The Strokes' },
          { albumName: 'Reading, Writing and Arithmetic', artistName: 'The Sundays' },
          { albumName: 'Velocity : Design : Comfort', artistName: 'Sweet Trip' },
          { albumName: 'Lonerism', artistName: 'Tame Impala' },
          { albumName: 'Marquee Moon', artistName: 'Television' },
          { albumName: 'Jailbreak', artistName: 'Thin Lizzy' },
          { albumName: 'Weezer[Blue Album]', artistName: 'Weezer' },
          { albumName: 'The College Dropout', artistName: 'Kanye West' },
          { albumName: 'Enter the Wu-Tang (36 Chambers)', artistName: 'Wu-Tang Clan'},
          { albumName: 'White Pony', artistName: 'Deftones' },
        ];
    
        // Fetch movie list based on names
        createMovieList(movieNames).then((fetchedMovies) => {
          setMovies(fetchedMovies);
        });

        const loadAlbums = async () => {
          const albumData = await fetchAlbumData(albumsWithArtists);
          setAlbums(albumData);
        };
        loadAlbums();

      }, []);
    
      const scrollLeftMovie = () => {
        if (movieCarouselRef.current) {
          movieCarouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
      };
    
      const scrollRightMovie = () => {
        if (movieCarouselRef.current) {
          movieCarouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      };

      const scrollLeftAlbum = () => {
        if (albumCarouselRef.current) {
          albumCarouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
      };
    
      const scrollRightAlbum = () => {
        if (albumCarouselRef.current) {
          albumCarouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      };

    return (
        <section id="hobbies" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Hobbies
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      Movies
                  </h2>
                    <p className="text-gray-300 mb-4">
                    I love movies and their capability to offer emotion, culture, and sheer entertainment through storytelling and cinematography.
                    Here are some of my favorite films:
                    </p>
            </div>

                
                <div className="relative flex items-center rounded-xl p-8 mt-8 mb-8 border-white/10 border hover:-translate-y-1 transition-all">
                    {/* Previous Button */}
                    <button
                        className="absolute left-0 z-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700"
                        onClick={scrollLeftMovie}
                    >
                        ◀
                    </button>

                    {/* Scrollable Movie List */}
                    <div
                        ref={movieCarouselRef}
                        className="flex overflow-hidden space-x-4 p-2 w-full"
                    >
                        {movies.map((movie) => (
                        <div key={movie.id} className="flex-none w-48">
                            <img
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                            />
                            <p className="text-xs text-center mt-2">{movie.title}</p>
                        </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        className="absolute right-0 z-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700"
                        onClick={scrollRightMovie}
                    >
                        ▶
                    </button>
                    </div>
                  <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Music
                    </h2>
                      <p className="text-gray-300 mb-6">
                      I'm also an avid music fan, I love collecting and discovering new music from all genres. Here are some of my favorite albums of all time:
                      </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 "></div>

                {/*music section*/}
                <div className="relative flex items-center rounded-xl p-0 mt-8 border-white/10 border hover:-translate-y-1 transition-all">  
                  <div className="flex items-center justify-center w-full py-10">
                    {/* Previous Button */}
                    <button
                        className="absolute left-0 z-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700"
                        onClick={scrollLeftAlbum}
                    >
                        ◀
                    </button>
                    
                    <div
                        ref={albumCarouselRef}
                        className="flex overflow-hidden space-x-4 p-10 w-full"
                    >
                      {albums.length > 0 &&
                        albums.map((album, index) => (
                          <div
                            key={index}
                            className="flex-shrink-0 w-48 h-48 bg-gray-300 rounded-lg shadow-lg relative"
                          >
                            <img
                              src={album.imageUrl}
                              alt={album.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <p className="text-xs text-center mt-2">{album.name}</p>                       
                        </div>
                        
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        className="absolute right-0 z-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700"
                        onClick={scrollRightAlbum}
                    >
                        ▶
                    </button>
                  </div>
                  </div>
                </div>
        </section>
    );
}