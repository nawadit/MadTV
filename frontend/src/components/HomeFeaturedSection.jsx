import React, { useEffect, useState } from "react";
import FeaturedCards from "./FeaturedCards";

export default function HomeFeaturedSection() {
  const [featuredMovies, setFeaturedMovies] = useState(null);
  const Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2NmZDZjNjExODdmM2ZkZWYzODNlM2FjNzU3ZGMzYSIsIm5iZiI6MTcyMTY1MzAyOC41NTY1MjcsInN1YiI6IjY2NzUyZTMxMTJkMDBkOWNkNTViM2U2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MP9hnw_g4VvUc7P3zCyoiv2QVkctYsVbb_Q-aH-02KE";

  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization,
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        const movie = json.results[0];
        setFeaturedMovies({
          id: movie.id,
          name: movie.title,
          backgroundURL: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        });
      })
      .catch((err) => console.error("Error: " + err));
  }, []);

  if (!featuredMovies) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <FeaturedCards
        id={featuredMovies.id}
        backgroundURL={featuredMovies.backgroundURL}
        name={featuredMovies.name}
      />
    </div>
  );
}
