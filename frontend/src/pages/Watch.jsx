import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import NavigationBar from "../components/NavigationBar";
import ItemCard from "../components/DefaultItemCard";
import DetailsCardForWatchingPage from "../components/DetailsCardForWatchingPage";
import Footer from "../components/Footer";

// Custom hook to get query parameters
const useQuery = () => new URLSearchParams(useLocation().search);

// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const fetchExternalIds = async (mediaType, id) => {
  const url = `https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2NmZDZjNjExODdmM2ZkZWYzODNlM2FjNzU3ZGMzYSIsIm5iZiI6MTcyMTc1MDk2MC4zMDE3MTksInN1YiI6IjY2NzUyZTMxMTJkMDBkOWNkNTViM2U2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I1xNyMBKskzmBhhoKyNvUxD7ZMxLNNt2FkicmpLWrxk",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch details: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching external IDs for ${mediaType}:`, error);
    return null;
  }
};

const Watch = () => {
  const query = useQuery();
  const [watching, setWatching] = useState("");
  const [watchingImdb, setWatchingImdb] = useState(null);

  useEffect(() => {
    setWatching(query.get("q"));
  }, [query]);

  useEffect(() => {
    if (watching) {
      const fetchIds = async () => {
        let contentDetails = await fetchExternalIds("movie", watching);
        if (!contentDetails) {
          contentDetails = await fetchExternalIds("tv", watching);
        }
        setWatchingImdb(contentDetails);
      };
      fetchIds();
    }
  }, [watching]);

  if (!watchingImdb) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="bg-slate-800 min-h-screen">
      <NavigationBar />
      <div className="contentTitle mt-5 pl-4">
        <p className="text-gray-500 text-lg">You're Watching:</p>
        <p className="text-gray-200 text-xl font-semibold -mt-2">
          {watchingImdb.title || watchingImdb.name}
        </p>
      </div>
      {watchingImdb && (
        <div className="max-w-full flex justify-center bg-red-800 mt-5 border-2 rounded-lg">
          <ReactPlayer
            controls={true}
            playIcon={true}
            url={`https://vidsrc.to/embed/movie/${watchingImdb.imdb_id}`}
          />
        </div>
      )}
      <div>
        <DetailsCardForWatchingPage
          key={watchingImdb.id}
          id={watchingImdb.id}
          name={watchingImdb.title || watchingImdb.name}
          image={`https://image.tmdb.org/t/p/original${watchingImdb.poster_path}`}
          rating={watchingImdb.vote_average}
          quality={"HD"}
          description={watchingImdb.overview}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Watch;
