import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ItemCard from "../components/DefaultItemCard";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function ResultPage() {
  const query = useQuery();
  let searchedFor = query.get("q");
  const [resultsMovies, setResultsMovies] = useState([]);
  const [resultsTv, setResultsTv] = useState([]);
  const [finalResult, setFinalResult] = useState([]);

  const url = `https://api.themoviedb.org/3/search/multi?query=${searchedFor}&include_adult=false&language=en-US&page=1`;
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
        setFinalResult([...json.results]);
      })
      .catch((err) => console.error("error:" + err));
  }, [searchedFor]);

  return (
    <div className="bg-slate-800">
      <NavigationBar />
      <div className="mt-5 border-t-2 border-slate-700">
        <p className="text-gray-300 py-2 text-center font-bold">
          {`Results for "${searchedFor}"`}
        </p>
      </div>

      {finalResult.map(
        (item) =>
          item.id &&
          item.poster_path && (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.title || item.name}
              image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              rating={item.vote_average}
              quality={"HD"}
              description={item.overview}
            />
          )
      )}
    </div>
  );
}
