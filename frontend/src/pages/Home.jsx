import React, { useEffect, useState } from "react";
import FeaturedCards from "../components/FeaturedCards";
import ItemCard from "../components/DefaultItemCard";
import NavigationBar from "../components/NavigationBar";

export default function Home() {
  const [moviesList, set_moviesList] = useState(undefined);
  const [popularMovies, set_popularMovies] = useState(undefined);
  const [popularMovie, set_popularMovie] = useState(undefined);
  const [featuredCardsParams, set_featuerdCardsParams] = useState(undefined);

  useEffect(() => {
    const url_moviesList =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options_moviesList = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2NmZDZjNjExODdmM2ZkZWYzODNlM2FjNzU3ZGMzYSIsIm5iZiI6MTcxOTQ4MTkzMC41MjkwMTgsInN1YiI6IjY2NzUyZTMxMTJkMDBkOWNkNTViM2U2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SWxP_dbxknqwrxtgh0FVQBmHnjAN1tkQ548hZy_u4QA",
      },
    };

    const url_popularMovies =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options_popularMovies = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2NmZDZjNjExODdmM2ZkZWYzODNlM2FjNzU3ZGMzYSIsIm5iZiI6MTcxOTQ4MTkzMC41MjkwMTgsInN1YiI6IjY2NzUyZTMxMTJkMDBkOWNkNTViM2U2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SWxP_dbxknqwrxtgh0FVQBmHnjAN1tkQ548hZy_u4QA",
      },
    };

    fetch(url_moviesList, options_moviesList)
      .then((res) => res.json())
      .then((json) => {
        set_moviesList(json.results);
        // console.log(popularMovies);
      })
      .catch((err) => console.error("error:" + err));

    fetch(url_popularMovies, options_popularMovies)
      .then((res) => res.json())
      .then((json) => {
        set_popularMovies(json);
        console.log(popularMovies);
        set_popularMovie(popularMovies);
        // console.log(popularMovie);
        set_featuredCardsParams({
          name: popularMovie.title,
          backgroundURL: `https://image.tmdb.org/t/p/w154/${popularMovie.backdrop}`,
        });
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className="bg-slate-800">
      <NavigationBar />

      <FeaturedCards {...featuredCardsParams} />

      {moviesList &&
        moviesList.map((movie) => {
          let movieCardParams = {
            name: movie.title,
            image: `https://image.tmdb.org/t/p/w154/${movie.poster_path}`,
            quality: "HD",
            description: movie.overview,
            link: "#",
            rating: movie.vote_average,
          };

          return <ItemCard {...movieCardParams} key={movie.id} />;
        })}
    </div>
  );
}
