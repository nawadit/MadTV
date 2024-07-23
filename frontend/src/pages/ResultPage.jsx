import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ItemCard from "../components/DefaultItemCard";

export default function ResultPage() {
  let searchedFor = "Hello";
  const [results, setResults] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?query=${searchedFor}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2NmZDZjNjExODdmM2ZkZWYzODNlM2FjNzU3ZGMzYSIsIm5iZiI6MTcyMTc1MDk2MC4zMDE3MTksInN1YiI6IjY2NzUyZTMxMTJkMDBkOWNkNTViM2U2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I1xNyMBKskzmBhhoKyNvUxD7ZMxLNNt2FkicmpLWrxk",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setResults([...json.results]);
      })
      .catch((err) => console.error("error:" + err));
  }, []);
  return (
    <div className="bg-slate-800">
      <NavigationBar />
      <div className="mt-5 border-t-2 border-slate-700">
        <p className="text-gray-300 py-2 text-center font-bold">
          {`Results for "${searchedFor}"`}
        </p>
      </div>
      <div>
        {results.map(
          (movie) =>
            movie.id &&
            movie.title &&
            movie.vote_average &&
            movie.overview &&
            movie.poster_path && (
              <ItemCard
                key={movie.id}
                name={movie.title}
                image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                rating={movie.vote_average}
                quality={"HD"}
                description={movie.overview}
              />
            )
        )}
      </div>
    </div>
  );
}
