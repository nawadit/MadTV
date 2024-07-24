import React, { useEffect, useState } from "react";
import ItemCard from "./DefaultItemCard";

export default function HOmeTvShowsList() {
  
    const [moviesList, setMoviesList] = useState([]);
    const url =
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2NmZDZjNjExODdmM2ZkZWYzODNlM2FjNzU3ZGMzYSIsIm5iZiI6MTcyMTY1MzAyOC41NTY1MjcsInN1YiI6IjY2NzUyZTMxMTJkMDBkOWNkNTViM2U2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MP9hnw_g4VvUc7P3zCyoiv2QVkctYsVbb_Q-aH-02KE",
      },
    };
  
    useEffect(() => {
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          setMoviesList(json.results);
        })
        .catch((err) => console.error("error:" + err));
    }, []);
  
    return (
      <div>
        {moviesList.map((movie) => (
          <ItemCard
          id={movie.id}
            key={movie.id}
            name={movie.name}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            rating={movie.vote_average}
            quality={"HD"}
            description={movie.overview}
          />
        ))}
      </div>
    );
}
