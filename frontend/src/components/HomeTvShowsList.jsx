import React, { useEffect, useState } from "react";
import ItemCard from "./DefaultItemCard";

export default function HomeTvShowsList() {
  const [tvShowsList, setTvShowsList] = useState([]);
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
        setTvShowsList(json.results);
      })
      .catch((err) => console.error("Error: " + err));
  }, []);

  if (tvShowsList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {tvShowsList.map((tvShow) => (
        <ItemCard
          key={tvShow.id}
          id={tvShow.id}
          name={tvShow.name}
          image={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
          rating={tvShow.vote_average}
          quality={"HD"}
          description={tvShow.overview}
        />
      ))}
    </div>
  );
}
