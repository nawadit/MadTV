import React, { useEffect, useState } from "react";
import FeaturedCards from "./FeaturedCards";

export default function HomeFeaturedSection() {
  const [featuredMovies, setFeaturedMovies] = useState({});
  const Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2NmZDZjNjExODdmM2ZkZWYzODNlM2FjNzU3ZGMzYSIsIm5iZiI6MTcyMTY1MzAyOC41NTY1MjcsInN1YiI6IjY2NzUyZTMxMTJkMDBkOWNkNTViM2U2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MP9hnw_g4VvUc7P3zCyoiv2QVkctYsVbb_Q-aH-02KE";

    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization,
    },
  };

  useEffect(()=>{fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      let propObject = {
        id: json.results[0].id,
        name: json.results[0].title,
        backgroundURL:
          "https://image.tmdb.org/t/p/original"+json.results[0].backdrop_path,
      };
     setFeaturedMovies({...propObject})
    })
    .catch((err) => console.error("error:" + err));}, [])

  

  return (
    <div>
      <FeaturedCards id={featuredMovies.id} backgroundURL={featuredMovies.backgroundURL} name={featuredMovies.name} />
    </div>
  );
}
