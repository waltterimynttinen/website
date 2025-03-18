import React, { useEffect, useState, useRef } from "react";
import {createMovieList} from "../../utils/tmdbApi";

export const Hobbies = () => {
      const [movies, setMovies] = useState([]);
      const carouselRef = useRef(null);
    
      useEffect(() => {
        const movieNames = [
          "Punch-Drunk Love",
          "Blade Runner(1982)",
          "After Hours",
          "Dog Day Afternoon",
          "Uncut Gems",
          "Fargo",
          "The Piano Teacher",
          "The Godfather",
          "12 Monkeys",
          "Adaptation.",
          "Good Time",
          "Aftersun",
          "Lost in Translation",
          "Akira",
          "Dazed and Confused",
          "Taxi Driver(1976)",
          "Synedoche, New York",
          "Pulp Fiction",
          "The Godfather Part II",
          "Blue Velvet",
          "Apocalypse Now",
          "Eternal Sunshine of the Spotless Mind",
          "Reservoir Dogs"
        ];
    
        // Fetch movie list based on names
        createMovieList(movieNames).then((fetchedMovies) => {
          setMovies(fetchedMovies);
        });
      }, []);
    
      const scrollLeft = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
      };
    
      const scrollRight = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      };

    return (
        <section id="hobbies" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Hobbies
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                    Movies have always been a passion of mine, offering a unique window into different cultures, stories, and emotions. 
                    Whether it's the thrill of a gripping action scene, the depth of a well-crafted drama, or the artistry of cinematography, I love exploring films from all genres. 
                    Here are some of my favorite films that have left a lasting impact on me and continue to shape my love for cinema:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 "></div>
                <div className="relative flex items-center rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    {/* Previous Button */}
                    <button
                        className="absolute left-0 z-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700"
                        onClick={scrollLeft}
                    >
                        ◀
                    </button>

                    {/* Scrollable Movie List */}
                    <div
                        ref={carouselRef}
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
                        onClick={scrollRight}
                    >
                        ▶
                    </button>
                    </div>
                </div>
        </section>
    );
}